# ExpiryNotification

Indicates that the issuer would like Google Wallet to send expiry notifications 2 days prior to the card expiration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_notification** | **bool** | Indicates if the object needs to have expiry notification enabled. | [optional] 

## Example

```python
from openapi_client.models.expiry_notification import ExpiryNotification

# TODO update the JSON string below
json = "{}"
# create an instance of ExpiryNotification from a JSON string
expiry_notification_instance = ExpiryNotification.from_json(json)
# print the JSON string representation of the object
print(ExpiryNotification.to_json())

# convert the object into a dict
expiry_notification_dict = expiry_notification_instance.to_dict()
# create an instance of ExpiryNotification from a dict
expiry_notification_from_dict = ExpiryNotification.from_dict(expiry_notification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


