# ApplicationProperties

The properties associated with the Application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_updates** | **bool** | A value indicating whether packages within the application may be overwritten using the same version string. | [optional] 
**default_version** | **str** | The package to use if a client requests the application but does not specify a version. This property can only be set to the name of an existing package. | [optional] 
**display_name** | **str** | The display name for the application. | [optional] 

## Example

```python
from openapi_client.models.application_properties import ApplicationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationProperties from a JSON string
application_properties_instance = ApplicationProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationProperties.to_json())

# convert the object into a dict
application_properties_dict = application_properties_instance.to_dict()
# create an instance of ApplicationProperties from a dict
application_properties_from_dict = ApplicationProperties.from_dict(application_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


