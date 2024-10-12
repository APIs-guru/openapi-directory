# GoogleFirebaseAppdistroV1Tester

A person that can be invited to test apps in a Firebase project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The name of the tester associated with the Google account used to accept the tester invitation. | [optional] 
**groups** | **List[str]** | The resource names of the groups this tester belongs to. | [optional] 
**last_activity_time** | **str** | Output only. The time the tester was last active. This is the most recent time the tester installed one of the apps. If they&#39;ve never installed one or if the release no longer exists, this is the time the tester was added to the project. | [optional] [readonly] 
**name** | **str** | The name of the tester resource. Format: &#x60;projects/{project_number}/testers/{email_address}&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1_tester import GoogleFirebaseAppdistroV1Tester

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1Tester from a JSON string
google_firebase_appdistro_v1_tester_instance = GoogleFirebaseAppdistroV1Tester.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1Tester.to_json())

# convert the object into a dict
google_firebase_appdistro_v1_tester_dict = google_firebase_appdistro_v1_tester_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1Tester from a dict
google_firebase_appdistro_v1_tester_from_dict = GoogleFirebaseAppdistroV1Tester.from_dict(google_firebase_appdistro_v1_tester_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


