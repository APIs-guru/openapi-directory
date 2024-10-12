# AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesHostingEnvironmentProfile

Specification for an App Service Environment to use for this resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource ID of the App Service Environment. | [optional] 
**name** | **str** | Name of the App Service Environment. | [optional] [readonly] 
**type** | **str** | Resource type of the App Service Environment. | [optional] [readonly] 

## Example

```python
from openapi_client.models.app_service_environments_change_vnet200_response_value_inner_properties_hosting_environment_profile import AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesHostingEnvironmentProfile

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesHostingEnvironmentProfile from a JSON string
app_service_environments_change_vnet200_response_value_inner_properties_hosting_environment_profile_instance = AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesHostingEnvironmentProfile.from_json(json)
# print the JSON string representation of the object
print(AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesHostingEnvironmentProfile.to_json())

# convert the object into a dict
app_service_environments_change_vnet200_response_value_inner_properties_hosting_environment_profile_dict = app_service_environments_change_vnet200_response_value_inner_properties_hosting_environment_profile_instance.to_dict()
# create an instance of AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesHostingEnvironmentProfile from a dict
app_service_environments_change_vnet200_response_value_inner_properties_hosting_environment_profile_from_dict = AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesHostingEnvironmentProfile.from_dict(app_service_environments_change_vnet200_response_value_inner_properties_hosting_environment_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


