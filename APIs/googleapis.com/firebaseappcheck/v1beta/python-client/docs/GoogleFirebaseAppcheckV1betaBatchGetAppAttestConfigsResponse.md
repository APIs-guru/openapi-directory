# GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse

Response message for the BatchGetAppAttestConfigs method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configs** | [**List[GoogleFirebaseAppcheckV1betaAppAttestConfig]**](GoogleFirebaseAppcheckV1betaAppAttestConfig.md) | AppAttestConfigs retrieved. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1beta_batch_get_app_attest_configs_response import GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse from a JSON string
google_firebase_appcheck_v1beta_batch_get_app_attest_configs_response_instance = GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse.to_json())

# convert the object into a dict
google_firebase_appcheck_v1beta_batch_get_app_attest_configs_response_dict = google_firebase_appcheck_v1beta_batch_get_app_attest_configs_response_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse from a dict
google_firebase_appcheck_v1beta_batch_get_app_attest_configs_response_from_dict = GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse.from_dict(google_firebase_appcheck_v1beta_batch_get_app_attest_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


