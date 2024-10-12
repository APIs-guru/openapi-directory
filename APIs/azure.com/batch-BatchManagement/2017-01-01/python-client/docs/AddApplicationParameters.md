# AddApplicationParameters

Parameters for an ApplicationOperations.AddApplication request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_updates** | **bool** | A value indicating whether packages within the application may be overwritten using the same version string. | [optional] 
**display_name** | **str** | The display name for the application. | [optional] 

## Example

```python
from openapi_client.models.add_application_parameters import AddApplicationParameters

# TODO update the JSON string below
json = "{}"
# create an instance of AddApplicationParameters from a JSON string
add_application_parameters_instance = AddApplicationParameters.from_json(json)
# print the JSON string representation of the object
print(AddApplicationParameters.to_json())

# convert the object into a dict
add_application_parameters_dict = add_application_parameters_instance.to_dict()
# create an instance of AddApplicationParameters from a dict
add_application_parameters_from_dict = AddApplicationParameters.from_dict(add_application_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


