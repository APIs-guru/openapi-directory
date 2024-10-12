# GetOrganizationLoginSecurity200ResponseApiAuthenticationIpRestrictionsForKeys

Details for API-only IP restrictions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Boolean indicating whether the organization will restrict API key (not Dashboard GUI) usage to a specific list of IP addresses or CIDR ranges. | [optional] 
**ranges** | **List[str]** | List of acceptable IP ranges. Entries can be single IP addresses, IP address ranges, and CIDR subnets. | [optional] 

## Example

```python
from openapi_client.models.get_organization_login_security200_response_api_authentication_ip_restrictions_for_keys import GetOrganizationLoginSecurity200ResponseApiAuthenticationIpRestrictionsForKeys

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationLoginSecurity200ResponseApiAuthenticationIpRestrictionsForKeys from a JSON string
get_organization_login_security200_response_api_authentication_ip_restrictions_for_keys_instance = GetOrganizationLoginSecurity200ResponseApiAuthenticationIpRestrictionsForKeys.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationLoginSecurity200ResponseApiAuthenticationIpRestrictionsForKeys.to_json())

# convert the object into a dict
get_organization_login_security200_response_api_authentication_ip_restrictions_for_keys_dict = get_organization_login_security200_response_api_authentication_ip_restrictions_for_keys_instance.to_dict()
# create an instance of GetOrganizationLoginSecurity200ResponseApiAuthenticationIpRestrictionsForKeys from a dict
get_organization_login_security200_response_api_authentication_ip_restrictions_for_keys_from_dict = GetOrganizationLoginSecurity200ResponseApiAuthenticationIpRestrictionsForKeys.from_dict(get_organization_login_security200_response_api_authentication_ip_restrictions_for_keys_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


