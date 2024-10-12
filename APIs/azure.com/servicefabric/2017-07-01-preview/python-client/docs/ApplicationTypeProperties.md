# ApplicationTypeProperties

The application type name properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The current deployment or provisioning state, which only appears in the response. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_type_properties import ApplicationTypeProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationTypeProperties from a JSON string
application_type_properties_instance = ApplicationTypeProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationTypeProperties.to_json())

# convert the object into a dict
application_type_properties_dict = application_type_properties_instance.to_dict()
# create an instance of ApplicationTypeProperties from a dict
application_type_properties_from_dict = ApplicationTypeProperties.from_dict(application_type_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


