# UpdateApplicationParameters

Parameters for an ApplicationOperations.UpdateApplication request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_updates** | **bool** | A value indicating whether packages within the application may be overwritten using the same version string. | [optional] 
**default_version** | **str** | The package to use if a client requests the application but does not specify a version. | [optional] 
**display_name** | **str** | The display name for the application. | [optional] 

## Example

```python
from openapi_client.models.update_application_parameters import UpdateApplicationParameters

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateApplicationParameters from a JSON string
update_application_parameters_instance = UpdateApplicationParameters.from_json(json)
# print the JSON string representation of the object
print(UpdateApplicationParameters.to_json())

# convert the object into a dict
update_application_parameters_dict = update_application_parameters_instance.to_dict()
# create an instance of UpdateApplicationParameters from a dict
update_application_parameters_from_dict = UpdateApplicationParameters.from_dict(update_application_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


