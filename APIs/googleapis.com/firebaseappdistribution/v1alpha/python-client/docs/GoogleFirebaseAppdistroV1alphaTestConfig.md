# GoogleFirebaseAppdistroV1alphaTestConfig

Configuration for automated tests

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Identifier. The name of the test configuration resource. Format: &#x60;projects/{project_number}/apps/{app_id}/testConfig&#x60; | [optional] 
**robo_crawler** | [**GoogleFirebaseAppdistroV1alphaRoboCrawler**](GoogleFirebaseAppdistroV1alphaRoboCrawler.md) |  | [optional] 
**test_devices** | [**List[GoogleFirebaseAppdistroV1alphaTestDevice]**](GoogleFirebaseAppdistroV1alphaTestDevice.md) | Optional. Tests will be run on this list of devices | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1alpha_test_config import GoogleFirebaseAppdistroV1alphaTestConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1alphaTestConfig from a JSON string
google_firebase_appdistro_v1alpha_test_config_instance = GoogleFirebaseAppdistroV1alphaTestConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1alphaTestConfig.to_json())

# convert the object into a dict
google_firebase_appdistro_v1alpha_test_config_dict = google_firebase_appdistro_v1alpha_test_config_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1alphaTestConfig from a dict
google_firebase_appdistro_v1alpha_test_config_from_dict = GoogleFirebaseAppdistroV1alphaTestConfig.from_dict(google_firebase_appdistro_v1alpha_test_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


