# VersionProperties

The properties of the version resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_package_url** | **str** | The URL to the application package | 
**default_parameter_list** | [**List[ApplicationParameter]**](ApplicationParameter.md) | List of application type parameters that can be overridden when creating or updating the application. | [optional] 
**provisioning_state** | **str** | The current deployment or provisioning state, which only appears in the response | [optional] [readonly] 

## Example

```python
from openapi_client.models.version_properties import VersionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VersionProperties from a JSON string
version_properties_instance = VersionProperties.from_json(json)
# print the JSON string representation of the object
print(VersionProperties.to_json())

# convert the object into a dict
version_properties_dict = version_properties_instance.to_dict()
# create an instance of VersionProperties from a dict
version_properties_from_dict = VersionProperties.from_dict(version_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


