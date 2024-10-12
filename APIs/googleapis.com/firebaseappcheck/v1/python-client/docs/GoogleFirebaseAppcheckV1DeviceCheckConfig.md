# GoogleFirebaseAppcheckV1DeviceCheckConfig

An app's DeviceCheck configuration object. This configuration is used by ExchangeDeviceCheckToken to validate device tokens issued to apps by DeviceCheck. It also controls certain properties of the returned `AppCheckToken`, such as its ttl. Note that the Team ID registered with your app is used as part of the validation process. Please register it via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v11/projects.iosApps/patch).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_id** | **str** | Required. The key identifier of a private key enabled with DeviceCheck, created in your Apple Developer account. | [optional] 
**name** | **str** | Required. The relative resource name of the DeviceCheck configuration object, in the format: &#x60;&#x60;&#x60; projects/{project_number}/apps/{app_id}/deviceCheckConfig &#x60;&#x60;&#x60; | [optional] 
**private_key** | **str** | Required. Input only. The contents of the private key (&#x60;.p8&#x60;) file associated with the key specified by &#x60;key_id&#x60;. For security reasons, this field will never be populated in any response. | [optional] 
**private_key_set** | **bool** | Output only. Whether the &#x60;private_key&#x60; field was previously set. Since we will never return the &#x60;private_key&#x60; field, this field is the only way to find out whether it was previously set. | [optional] [readonly] 
**token_ttl** | **str** | Specifies the duration for which App Check tokens exchanged from DeviceCheck tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1_device_check_config import GoogleFirebaseAppcheckV1DeviceCheckConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1DeviceCheckConfig from a JSON string
google_firebase_appcheck_v1_device_check_config_instance = GoogleFirebaseAppcheckV1DeviceCheckConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1DeviceCheckConfig.to_json())

# convert the object into a dict
google_firebase_appcheck_v1_device_check_config_dict = google_firebase_appcheck_v1_device_check_config_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1DeviceCheckConfig from a dict
google_firebase_appcheck_v1_device_check_config_from_dict = GoogleFirebaseAppcheckV1DeviceCheckConfig.from_dict(google_firebase_appcheck_v1_device_check_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


