# HostingEnvironmentProfile

Specification for a hostingEnvironment (App Service Environment) to use for this resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource id of the hostingEnvironment (App Service Environment) | [optional] 
**name** | **str** | Name of the hostingEnvironment (App Service Environment) (read only) | [optional] 
**type** | **str** | Resource type of the hostingEnvironment (App Service Environment) (read only) | [optional] 

## Example

```python
from openapi_client.models.hosting_environment_profile import HostingEnvironmentProfile

# TODO update the JSON string below
json = "{}"
# create an instance of HostingEnvironmentProfile from a JSON string
hosting_environment_profile_instance = HostingEnvironmentProfile.from_json(json)
# print the JSON string representation of the object
print(HostingEnvironmentProfile.to_json())

# convert the object into a dict
hosting_environment_profile_dict = hosting_environment_profile_instance.to_dict()
# create an instance of HostingEnvironmentProfile from a dict
hosting_environment_profile_from_dict = HostingEnvironmentProfile.from_dict(hosting_environment_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


