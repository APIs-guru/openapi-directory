# GoogleFirebaseAppdistroV1alphaAppCrash

An app crash that occurred during an automated test.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Output only. The message associated with the crash. | [optional] [readonly] 
**stack_trace** | **str** | Output only. The raw stack trace. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1alpha_app_crash import GoogleFirebaseAppdistroV1alphaAppCrash

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1alphaAppCrash from a JSON string
google_firebase_appdistro_v1alpha_app_crash_instance = GoogleFirebaseAppdistroV1alphaAppCrash.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1alphaAppCrash.to_json())

# convert the object into a dict
google_firebase_appdistro_v1alpha_app_crash_dict = google_firebase_appdistro_v1alpha_app_crash_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1alphaAppCrash from a dict
google_firebase_appdistro_v1alpha_app_crash_from_dict = GoogleFirebaseAppdistroV1alphaAppCrash.from_dict(google_firebase_appdistro_v1alpha_app_crash_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


