# GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest

Request message for the ExchangeDeviceCheckToken method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_token** | **str** | Required. The &#x60;device_token&#x60; as returned by Apple&#39;s client-side [DeviceCheck API](https://developer.apple.com/documentation/devicecheck/dcdevice). This is the base64 encoded &#x60;Data&#x60; (Swift) or &#x60;NSData&#x60; (ObjC) object. | [optional] 
**limited_use** | **bool** | Specifies whether this attestation is for use in a *limited use* (&#x60;true&#x60;) or *session based* (&#x60;false&#x60;) context. To enable this attestation to be used with the *replay protection* feature, set this to &#x60;true&#x60;. The default value is &#x60;false&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1_exchange_device_check_token_request import GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest from a JSON string
google_firebase_appcheck_v1_exchange_device_check_token_request_instance = GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest.to_json())

# convert the object into a dict
google_firebase_appcheck_v1_exchange_device_check_token_request_dict = google_firebase_appcheck_v1_exchange_device_check_token_request_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest from a dict
google_firebase_appcheck_v1_exchange_device_check_token_request_from_dict = GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest.from_dict(google_firebase_appcheck_v1_exchange_device_check_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


