# ApplicationType

The type of the application

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_parameter_list** | [**List[ApplicationTypeDefaultParameterListInner]**](ApplicationTypeDefaultParameterListInner.md) |  | [optional] 
**name** | **str** |  | [optional] 
**version** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.application_type import ApplicationType

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationType from a JSON string
application_type_instance = ApplicationType.from_json(json)
# print the JSON string representation of the object
print(ApplicationType.to_json())

# convert the object into a dict
application_type_dict = application_type_instance.to_dict()
# create an instance of ApplicationType from a dict
application_type_from_dict = ApplicationType.from_dict(application_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


