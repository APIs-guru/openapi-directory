# NotificationHubProperties

NotificationHub properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adm_credential** | [**AdmCredential**](AdmCredential.md) |  | [optional] 
**apns_credential** | [**ApnsCredential**](ApnsCredential.md) |  | [optional] 
**authorization_rules** | [**List[SharedAccessAuthorizationRuleProperties]**](SharedAccessAuthorizationRuleProperties.md) | The AuthorizationRules of the created NotificationHub | [optional] 
**baidu_credential** | [**BaiduCredential**](BaiduCredential.md) |  | [optional] 
**gcm_credential** | [**GcmCredential**](GcmCredential.md) |  | [optional] 
**mpns_credential** | [**MpnsCredential**](MpnsCredential.md) |  | [optional] 
**name** | **str** | The NotificationHub name. | [optional] 
**registration_ttl** | **str** | The RegistrationTtl of the created NotificationHub | [optional] 
**wns_credential** | [**WnsCredential**](WnsCredential.md) |  | [optional] 

## Example

```python
from openapi_client.models.notification_hub_properties import NotificationHubProperties

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationHubProperties from a JSON string
notification_hub_properties_instance = NotificationHubProperties.from_json(json)
# print the JSON string representation of the object
print(NotificationHubProperties.to_json())

# convert the object into a dict
notification_hub_properties_dict = notification_hub_properties_instance.to_dict()
# create an instance of NotificationHubProperties from a dict
notification_hub_properties_from_dict = NotificationHubProperties.from_dict(notification_hub_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


