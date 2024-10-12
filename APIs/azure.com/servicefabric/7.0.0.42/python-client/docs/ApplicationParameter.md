# ApplicationParameter

Describes an application parameter override to be applied when creating or upgrading an application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The name of the parameter. | 
**value** | **str** | The value of the parameter. | 

## Example

```python
from openapi_client.models.application_parameter import ApplicationParameter

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationParameter from a JSON string
application_parameter_instance = ApplicationParameter.from_json(json)
# print the JSON string representation of the object
print(ApplicationParameter.to_json())

# convert the object into a dict
application_parameter_dict = application_parameter_instance.to_dict()
# create an instance of ApplicationParameter from a dict
application_parameter_from_dict = ApplicationParameter.from_dict(application_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


