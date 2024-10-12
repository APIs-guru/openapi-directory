# GetOrganizationLoginSecurity200ResponseApiAuthentication

Details for indicating whether organization will restrict access to API (but not Dashboard) to certain IP addresses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_restrictions_for_keys** | [**GetOrganizationLoginSecurity200ResponseApiAuthenticationIpRestrictionsForKeys**](GetOrganizationLoginSecurity200ResponseApiAuthenticationIpRestrictionsForKeys.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_organization_login_security200_response_api_authentication import GetOrganizationLoginSecurity200ResponseApiAuthentication

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationLoginSecurity200ResponseApiAuthentication from a JSON string
get_organization_login_security200_response_api_authentication_instance = GetOrganizationLoginSecurity200ResponseApiAuthentication.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationLoginSecurity200ResponseApiAuthentication.to_json())

# convert the object into a dict
get_organization_login_security200_response_api_authentication_dict = get_organization_login_security200_response_api_authentication_instance.to_dict()
# create an instance of GetOrganizationLoginSecurity200ResponseApiAuthentication from a dict
get_organization_login_security200_response_api_authentication_from_dict = GetOrganizationLoginSecurity200ResponseApiAuthentication.from_dict(get_organization_login_security200_response_api_authentication_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


