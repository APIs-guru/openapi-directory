# WebAppsList200ResponseValueInnerPropertiesHostingEnvironmentProfile

Specification for an App Service Environment to use for this resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource ID of the App Service Environment. | [optional] 
**name** | **str** | Name of the App Service Environment. | [optional] [readonly] 
**type** | **str** | Resource type of the App Service Environment. | [optional] [readonly] 

## Example

```python
from openapi_client.models.web_apps_list200_response_value_inner_properties_hosting_environment_profile import WebAppsList200ResponseValueInnerPropertiesHostingEnvironmentProfile

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsList200ResponseValueInnerPropertiesHostingEnvironmentProfile from a JSON string
web_apps_list200_response_value_inner_properties_hosting_environment_profile_instance = WebAppsList200ResponseValueInnerPropertiesHostingEnvironmentProfile.from_json(json)
# print the JSON string representation of the object
print(WebAppsList200ResponseValueInnerPropertiesHostingEnvironmentProfile.to_json())

# convert the object into a dict
web_apps_list200_response_value_inner_properties_hosting_environment_profile_dict = web_apps_list200_response_value_inner_properties_hosting_environment_profile_instance.to_dict()
# create an instance of WebAppsList200ResponseValueInnerPropertiesHostingEnvironmentProfile from a dict
web_apps_list200_response_value_inner_properties_hosting_environment_profile_from_dict = WebAppsList200ResponseValueInnerPropertiesHostingEnvironmentProfile.from_dict(web_apps_list200_response_value_inner_properties_hosting_environment_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


