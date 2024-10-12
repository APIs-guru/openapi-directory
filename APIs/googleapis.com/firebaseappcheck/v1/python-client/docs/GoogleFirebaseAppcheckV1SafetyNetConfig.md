# GoogleFirebaseAppcheckV1SafetyNetConfig

An app's SafetyNet configuration object. This configuration controls certain properties of the `AppCheckToken` returned by ExchangeSafetyNetToken, such as its ttl. Note that your registered SHA-256 certificate fingerprints are used to validate tokens issued by SafetyNet; please register them via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v11/projects.androidApps.sha/create).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. The relative resource name of the SafetyNet configuration object, in the format: &#x60;&#x60;&#x60; projects/{project_number}/apps/{app_id}/safetyNetConfig &#x60;&#x60;&#x60; | [optional] 
**token_ttl** | **str** | Specifies the duration for which App Check tokens exchanged from SafetyNet tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1_safety_net_config import GoogleFirebaseAppcheckV1SafetyNetConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1SafetyNetConfig from a JSON string
google_firebase_appcheck_v1_safety_net_config_instance = GoogleFirebaseAppcheckV1SafetyNetConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1SafetyNetConfig.to_json())

# convert the object into a dict
google_firebase_appcheck_v1_safety_net_config_dict = google_firebase_appcheck_v1_safety_net_config_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1SafetyNetConfig from a dict
google_firebase_appcheck_v1_safety_net_config_from_dict = GoogleFirebaseAppcheckV1SafetyNetConfig.from_dict(google_firebase_appcheck_v1_safety_net_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


