# GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse

Response message for the BatchGetSafetyNetConfigs method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configs** | [**List[GoogleFirebaseAppcheckV1SafetyNetConfig]**](GoogleFirebaseAppcheckV1SafetyNetConfig.md) | SafetyNetConfigs retrieved. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1_batch_get_safety_net_configs_response import GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse from a JSON string
google_firebase_appcheck_v1_batch_get_safety_net_configs_response_instance = GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse.to_json())

# convert the object into a dict
google_firebase_appcheck_v1_batch_get_safety_net_configs_response_dict = google_firebase_appcheck_v1_batch_get_safety_net_configs_response_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse from a dict
google_firebase_appcheck_v1_batch_get_safety_net_configs_response_from_dict = GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse.from_dict(google_firebase_appcheck_v1_batch_get_safety_net_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


