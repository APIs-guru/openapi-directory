# UpdateOrganizationAdaptivePolicySettingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled_networks** | **List[str]** | List of network IDs with adaptive policy enabled | [optional] 

## Example

```python
from openapi_client.models.update_organization_adaptive_policy_settings_request import UpdateOrganizationAdaptivePolicySettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationAdaptivePolicySettingsRequest from a JSON string
update_organization_adaptive_policy_settings_request_instance = UpdateOrganizationAdaptivePolicySettingsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationAdaptivePolicySettingsRequest.to_json())

# convert the object into a dict
update_organization_adaptive_policy_settings_request_dict = update_organization_adaptive_policy_settings_request_instance.to_dict()
# create an instance of UpdateOrganizationAdaptivePolicySettingsRequest from a dict
update_organization_adaptive_policy_settings_request_from_dict = UpdateOrganizationAdaptivePolicySettingsRequest.from_dict(update_organization_adaptive_policy_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


