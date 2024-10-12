# GetOrganizationConfigTemplateSwitchProfiles200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model** | **str** | Switch model | [optional] 
**name** | **str** | Switch profile name | [optional] 
**switch_profile_id** | **str** | Switch profile id | [optional] 

## Example

```python
from openapi_client.models.get_organization_config_template_switch_profiles200_response import GetOrganizationConfigTemplateSwitchProfiles200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationConfigTemplateSwitchProfiles200Response from a JSON string
get_organization_config_template_switch_profiles200_response_instance = GetOrganizationConfigTemplateSwitchProfiles200Response.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationConfigTemplateSwitchProfiles200Response.to_json())

# convert the object into a dict
get_organization_config_template_switch_profiles200_response_dict = get_organization_config_template_switch_profiles200_response_instance.to_dict()
# create an instance of GetOrganizationConfigTemplateSwitchProfiles200Response from a dict
get_organization_config_template_switch_profiles200_response_from_dict = GetOrganizationConfigTemplateSwitchProfiles200Response.from_dict(get_organization_config_template_switch_profiles200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


