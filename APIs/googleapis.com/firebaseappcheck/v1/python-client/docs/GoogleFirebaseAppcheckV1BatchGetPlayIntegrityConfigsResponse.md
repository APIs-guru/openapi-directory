# GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse

Response message for the BatchGetPlayIntegrityConfigs method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configs** | [**List[GoogleFirebaseAppcheckV1PlayIntegrityConfig]**](GoogleFirebaseAppcheckV1PlayIntegrityConfig.md) | PlayIntegrityConfigs retrieved. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1_batch_get_play_integrity_configs_response import GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse from a JSON string
google_firebase_appcheck_v1_batch_get_play_integrity_configs_response_instance = GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse.to_json())

# convert the object into a dict
google_firebase_appcheck_v1_batch_get_play_integrity_configs_response_dict = google_firebase_appcheck_v1_batch_get_play_integrity_configs_response_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse from a dict
google_firebase_appcheck_v1_batch_get_play_integrity_configs_response_from_dict = GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse.from_dict(google_firebase_appcheck_v1_batch_get_play_integrity_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


