# UpdateNetworkClientSplashAuthorizationStatusRequestSsids

The target SSIDs. Each SSID must be enabled and must have Click-through splash enabled. For each SSID where isAuthorized is true, the expiration time will automatically be set according to the SSID's splash frequency. Not all networks support configuring all SSIDs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_0** | [**UpdateNetworkClientSplashAuthorizationStatusRequestSsids0**](UpdateNetworkClientSplashAuthorizationStatusRequestSsids0.md) |  | [optional] 
**var_1** | [**UpdateNetworkClientSplashAuthorizationStatusRequestSsids1**](UpdateNetworkClientSplashAuthorizationStatusRequestSsids1.md) |  | [optional] 
**var_2** | [**UpdateNetworkClientSplashAuthorizationStatusRequestSsids2**](UpdateNetworkClientSplashAuthorizationStatusRequestSsids2.md) |  | [optional] 
**var_3** | [**UpdateNetworkClientSplashAuthorizationStatusRequestSsids3**](UpdateNetworkClientSplashAuthorizationStatusRequestSsids3.md) |  | [optional] 
**var_4** | [**UpdateNetworkClientSplashAuthorizationStatusRequestSsids4**](UpdateNetworkClientSplashAuthorizationStatusRequestSsids4.md) |  | [optional] 
**var_5** | [**UpdateNetworkClientSplashAuthorizationStatusRequestSsids5**](UpdateNetworkClientSplashAuthorizationStatusRequestSsids5.md) |  | [optional] 
**var_6** | [**UpdateNetworkClientSplashAuthorizationStatusRequestSsids6**](UpdateNetworkClientSplashAuthorizationStatusRequestSsids6.md) |  | [optional] 
**var_7** | [**UpdateNetworkClientSplashAuthorizationStatusRequestSsids7**](UpdateNetworkClientSplashAuthorizationStatusRequestSsids7.md) |  | [optional] 
**var_8** | [**UpdateNetworkClientSplashAuthorizationStatusRequestSsids8**](UpdateNetworkClientSplashAuthorizationStatusRequestSsids8.md) |  | [optional] 
**var_9** | [**UpdateNetworkClientSplashAuthorizationStatusRequestSsids9**](UpdateNetworkClientSplashAuthorizationStatusRequestSsids9.md) |  | [optional] 
**var_10** | [**UpdateNetworkClientSplashAuthorizationStatusRequestSsids10**](UpdateNetworkClientSplashAuthorizationStatusRequestSsids10.md) |  | [optional] 
**var_11** | [**UpdateNetworkClientSplashAuthorizationStatusRequestSsids11**](UpdateNetworkClientSplashAuthorizationStatusRequestSsids11.md) |  | [optional] 
**var_12** | [**UpdateNetworkClientSplashAuthorizationStatusRequestSsids12**](UpdateNetworkClientSplashAuthorizationStatusRequestSsids12.md) |  | [optional] 
**var_13** | [**UpdateNetworkClientSplashAuthorizationStatusRequestSsids13**](UpdateNetworkClientSplashAuthorizationStatusRequestSsids13.md) |  | [optional] 
**var_14** | [**UpdateNetworkClientSplashAuthorizationStatusRequestSsids14**](UpdateNetworkClientSplashAuthorizationStatusRequestSsids14.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_client_splash_authorization_status_request_ssids import UpdateNetworkClientSplashAuthorizationStatusRequestSsids

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkClientSplashAuthorizationStatusRequestSsids from a JSON string
update_network_client_splash_authorization_status_request_ssids_instance = UpdateNetworkClientSplashAuthorizationStatusRequestSsids.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkClientSplashAuthorizationStatusRequestSsids.to_json())

# convert the object into a dict
update_network_client_splash_authorization_status_request_ssids_dict = update_network_client_splash_authorization_status_request_ssids_instance.to_dict()
# create an instance of UpdateNetworkClientSplashAuthorizationStatusRequestSsids from a dict
update_network_client_splash_authorization_status_request_ssids_from_dict = UpdateNetworkClientSplashAuthorizationStatusRequestSsids.from_dict(update_network_client_splash_authorization_status_request_ssids_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


