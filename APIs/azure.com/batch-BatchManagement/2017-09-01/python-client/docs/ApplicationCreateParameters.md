# ApplicationCreateParameters

Parameters for adding an Application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_updates** | **bool** | A value indicating whether packages within the application may be overwritten using the same version string. | [optional] 
**display_name** | **str** | The display name for the application. | [optional] 

## Example

```python
from openapi_client.models.application_create_parameters import ApplicationCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationCreateParameters from a JSON string
application_create_parameters_instance = ApplicationCreateParameters.from_json(json)
# print the JSON string representation of the object
print(ApplicationCreateParameters.to_json())

# convert the object into a dict
application_create_parameters_dict = application_create_parameters_instance.to_dict()
# create an instance of ApplicationCreateParameters from a dict
application_create_parameters_from_dict = ApplicationCreateParameters.from_dict(application_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


