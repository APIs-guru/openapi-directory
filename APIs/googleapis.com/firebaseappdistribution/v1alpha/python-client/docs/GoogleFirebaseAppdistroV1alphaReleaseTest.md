# GoogleFirebaseAppdistroV1alphaReleaseTest

The results of running an automated test on a release.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when the test was run. | [optional] [readonly] 
**device_executions** | [**List[GoogleFirebaseAppdistroV1alphaDeviceExecution]**](GoogleFirebaseAppdistroV1alphaDeviceExecution.md) | Required. The results of the test on each device. | [optional] 
**login_credential** | [**GoogleFirebaseAppdistroV1alphaLoginCredential**](GoogleFirebaseAppdistroV1alphaLoginCredential.md) |  | [optional] 
**name** | **str** | The name of the release test resource. Format: &#x60;projects/{project_number}/apps/{app_id}/releases/{release_id}/tests/{test_id}&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1alpha_release_test import GoogleFirebaseAppdistroV1alphaReleaseTest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1alphaReleaseTest from a JSON string
google_firebase_appdistro_v1alpha_release_test_instance = GoogleFirebaseAppdistroV1alphaReleaseTest.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1alphaReleaseTest.to_json())

# convert the object into a dict
google_firebase_appdistro_v1alpha_release_test_dict = google_firebase_appdistro_v1alpha_release_test_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1alphaReleaseTest from a dict
google_firebase_appdistro_v1alpha_release_test_from_dict = GoogleFirebaseAppdistroV1alphaReleaseTest.from_dict(google_firebase_appdistro_v1alpha_release_test_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


