# GoogleFirebaseAppcheckV1betaAppAttestConfig

An app's App Attest configuration object. This configuration controls certain properties of the `AppCheckToken` returned by ExchangeAppAttestAttestation and ExchangeAppAttestAssertion, such as its ttl. Note that the Team ID registered with your app is used as part of the validation process. Please register it via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v1beta1/projects.iosApps/patch).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. The relative resource name of the App Attest configuration object, in the format: &#x60;&#x60;&#x60; projects/{project_number}/apps/{app_id}/appAttestConfig &#x60;&#x60;&#x60; | [optional] 
**token_ttl** | **str** | Specifies the duration for which App Check tokens exchanged from App Attest artifacts will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1beta_app_attest_config import GoogleFirebaseAppcheckV1betaAppAttestConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1betaAppAttestConfig from a JSON string
google_firebase_appcheck_v1beta_app_attest_config_instance = GoogleFirebaseAppcheckV1betaAppAttestConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1betaAppAttestConfig.to_json())

# convert the object into a dict
google_firebase_appcheck_v1beta_app_attest_config_dict = google_firebase_appcheck_v1beta_app_attest_config_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1betaAppAttestConfig from a dict
google_firebase_appcheck_v1beta_app_attest_config_from_dict = GoogleFirebaseAppcheckV1betaAppAttestConfig.from_dict(google_firebase_appcheck_v1beta_app_attest_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


