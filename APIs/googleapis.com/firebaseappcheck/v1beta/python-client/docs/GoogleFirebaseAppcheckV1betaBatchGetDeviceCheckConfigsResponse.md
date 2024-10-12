# GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse

Response message for the BatchGetDeviceCheckConfigs method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configs** | [**List[GoogleFirebaseAppcheckV1betaDeviceCheckConfig]**](GoogleFirebaseAppcheckV1betaDeviceCheckConfig.md) | DeviceCheckConfigs retrieved. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1beta_batch_get_device_check_configs_response import GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse from a JSON string
google_firebase_appcheck_v1beta_batch_get_device_check_configs_response_instance = GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse.to_json())

# convert the object into a dict
google_firebase_appcheck_v1beta_batch_get_device_check_configs_response_dict = google_firebase_appcheck_v1beta_batch_get_device_check_configs_response_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse from a dict
google_firebase_appcheck_v1beta_batch_get_device_check_configs_response_from_dict = GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse.from_dict(google_firebase_appcheck_v1beta_batch_get_device_check_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


