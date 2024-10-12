# ApplicationUpdateParameters

Parameters for an update application request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_updates** | **bool** | A value indicating whether packages within the application may be overwritten using the same version string. | [optional] 
**default_version** | **str** | The package to use if a client requests the application but does not specify a version. | [optional] 
**display_name** | **str** | The display name for the application. | [optional] 

## Example

```python
from openapi_client.models.application_update_parameters import ApplicationUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationUpdateParameters from a JSON string
application_update_parameters_instance = ApplicationUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(ApplicationUpdateParameters.to_json())

# convert the object into a dict
application_update_parameters_dict = application_update_parameters_instance.to_dict()
# create an instance of ApplicationUpdateParameters from a dict
application_update_parameters_from_dict = ApplicationUpdateParameters.from_dict(application_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


