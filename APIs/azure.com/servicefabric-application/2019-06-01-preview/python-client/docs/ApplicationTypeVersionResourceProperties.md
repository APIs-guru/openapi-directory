# ApplicationTypeVersionResourceProperties

The properties of the application type version resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_package_url** | **str** | The URL to the application package | 
**default_parameter_list** | **Dict[str, str]** | List of application type parameters that can be overridden when creating or updating the application. | [optional] 
**provisioning_state** | **str** | The current deployment or provisioning state, which only appears in the response | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_type_version_resource_properties import ApplicationTypeVersionResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationTypeVersionResourceProperties from a JSON string
application_type_version_resource_properties_instance = ApplicationTypeVersionResourceProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationTypeVersionResourceProperties.to_json())

# convert the object into a dict
application_type_version_resource_properties_dict = application_type_version_resource_properties_instance.to_dict()
# create an instance of ApplicationTypeVersionResourceProperties from a dict
application_type_version_resource_properties_from_dict = ApplicationTypeVersionResourceProperties.from_dict(application_type_version_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


