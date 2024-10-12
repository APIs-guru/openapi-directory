# GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse

Response message for the BatchGetDeviceCheckConfigs method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configs** | [**List[GoogleFirebaseAppcheckV1DeviceCheckConfig]**](GoogleFirebaseAppcheckV1DeviceCheckConfig.md) | DeviceCheckConfigs retrieved. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1_batch_get_device_check_configs_response import GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse from a JSON string
google_firebase_appcheck_v1_batch_get_device_check_configs_response_instance = GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse.to_json())

# convert the object into a dict
google_firebase_appcheck_v1_batch_get_device_check_configs_response_dict = google_firebase_appcheck_v1_batch_get_device_check_configs_response_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse from a dict
google_firebase_appcheck_v1_batch_get_device_check_configs_response_from_dict = GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse.from_dict(google_firebase_appcheck_v1_batch_get_device_check_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


