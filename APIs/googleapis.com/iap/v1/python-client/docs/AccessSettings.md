# AccessSettings

Access related settings for IAP protected apps.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_domains_settings** | [**AllowedDomainsSettings**](AllowedDomainsSettings.md) |  | [optional] 
**cors_settings** | [**CorsSettings**](CorsSettings.md) |  | [optional] 
**gcip_settings** | [**GcipSettings**](GcipSettings.md) |  | [optional] 
**oauth_settings** | [**OAuthSettings**](OAuthSettings.md) |  | [optional] 
**policy_delegation_settings** | [**PolicyDelegationSettings**](PolicyDelegationSettings.md) |  | [optional] 
**reauth_settings** | [**ReauthSettings**](ReauthSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.access_settings import AccessSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AccessSettings from a JSON string
access_settings_instance = AccessSettings.from_json(json)
# print the JSON string representation of the object
print(AccessSettings.to_json())

# convert the object into a dict
access_settings_dict = access_settings_instance.to_dict()
# create an instance of AccessSettings from a dict
access_settings_from_dict = AccessSettings.from_dict(access_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


