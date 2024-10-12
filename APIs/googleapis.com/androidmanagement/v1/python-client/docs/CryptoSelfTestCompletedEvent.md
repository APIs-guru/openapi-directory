# CryptoSelfTestCompletedEvent

Validates whether Android’s built-in cryptographic library (BoringSSL) is valid. Should always succeed on device boot, if it fails, the device should be considered untrusted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** | Whether the test succeeded. | [optional] 

## Example

```python
from openapi_client.models.crypto_self_test_completed_event import CryptoSelfTestCompletedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of CryptoSelfTestCompletedEvent from a JSON string
crypto_self_test_completed_event_instance = CryptoSelfTestCompletedEvent.from_json(json)
# print the JSON string representation of the object
print(CryptoSelfTestCompletedEvent.to_json())

# convert the object into a dict
crypto_self_test_completed_event_dict = crypto_self_test_completed_event_instance.to_dict()
# create an instance of CryptoSelfTestCompletedEvent from a dict
crypto_self_test_completed_event_from_dict = CryptoSelfTestCompletedEvent.from_dict(crypto_self_test_completed_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


