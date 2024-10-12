# GoogleFirebaseAppdistroV1alphaTestDevice

A device on which automated tests can be run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locale** | **str** | Optional. The locale of the device (e.g. \&quot;en_US\&quot; for US English) during the test. | [optional] 
**model** | **str** | Required. The device model. | [optional] 
**orientation** | **str** | Optional. The orientation of the device during the test. | [optional] 
**version** | **str** | Required. The version of the device (API level on Android). | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1alpha_test_device import GoogleFirebaseAppdistroV1alphaTestDevice

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1alphaTestDevice from a JSON string
google_firebase_appdistro_v1alpha_test_device_instance = GoogleFirebaseAppdistroV1alphaTestDevice.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1alphaTestDevice.to_json())

# convert the object into a dict
google_firebase_appdistro_v1alpha_test_device_dict = google_firebase_appdistro_v1alpha_test_device_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1alphaTestDevice from a dict
google_firebase_appdistro_v1alpha_test_device_from_dict = GoogleFirebaseAppdistroV1alphaTestDevice.from_dict(google_firebase_appdistro_v1alpha_test_device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


