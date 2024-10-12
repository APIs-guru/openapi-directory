# UnregisterApplicationType

The type of the unregister application

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_type_version** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.unregister_application_type import UnregisterApplicationType

# TODO update the JSON string below
json = "{}"
# create an instance of UnregisterApplicationType from a JSON string
unregister_application_type_instance = UnregisterApplicationType.from_json(json)
# print the JSON string representation of the object
print(UnregisterApplicationType.to_json())

# convert the object into a dict
unregister_application_type_dict = unregister_application_type_instance.to_dict()
# create an instance of UnregisterApplicationType from a dict
unregister_application_type_from_dict = UnregisterApplicationType.from_dict(unregister_application_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


