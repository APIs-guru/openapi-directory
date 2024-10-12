# GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse

Response message for the BatchGetPlayIntegrityConfigs method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configs** | [**List[GoogleFirebaseAppcheckV1betaPlayIntegrityConfig]**](GoogleFirebaseAppcheckV1betaPlayIntegrityConfig.md) | PlayIntegrityConfigs retrieved. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1beta_batch_get_play_integrity_configs_response import GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse from a JSON string
google_firebase_appcheck_v1beta_batch_get_play_integrity_configs_response_instance = GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse.to_json())

# convert the object into a dict
google_firebase_appcheck_v1beta_batch_get_play_integrity_configs_response_dict = google_firebase_appcheck_v1beta_batch_get_play_integrity_configs_response_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse from a dict
google_firebase_appcheck_v1beta_batch_get_play_integrity_configs_response_from_dict = GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse.from_dict(google_firebase_appcheck_v1beta_batch_get_play_integrity_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


