# GoogleFirebaseAppdistroV1DistributeReleaseRequest

The request message for `DistributeRelease`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_aliases** | **List[str]** | A list of group aliases (IDs) to be given access to this release. A combined maximum of 999 &#x60;testerEmails&#x60; and &#x60;groupAliases&#x60; can be specified in a single request. | [optional] 
**tester_emails** | **List[str]** | A list of tester email addresses to be given access to this release. A combined maximum of 999 &#x60;testerEmails&#x60; and &#x60;groupAliases&#x60; can be specified in a single request. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1_distribute_release_request import GoogleFirebaseAppdistroV1DistributeReleaseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1DistributeReleaseRequest from a JSON string
google_firebase_appdistro_v1_distribute_release_request_instance = GoogleFirebaseAppdistroV1DistributeReleaseRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1DistributeReleaseRequest.to_json())

# convert the object into a dict
google_firebase_appdistro_v1_distribute_release_request_dict = google_firebase_appdistro_v1_distribute_release_request_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1DistributeReleaseRequest from a dict
google_firebase_appdistro_v1_distribute_release_request_from_dict = GoogleFirebaseAppdistroV1DistributeReleaseRequest.from_dict(google_firebase_appdistro_v1_distribute_release_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


