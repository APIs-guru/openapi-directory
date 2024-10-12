# GoogleFirebaseAppdistroV1BatchJoinGroupRequest

The request message for `BatchJoinGroup`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_missing_testers** | **bool** | Indicates whether to create tester resources based on &#x60;emails&#x60; if they don&#39;t exist yet. | [optional] 
**emails** | **List[str]** | Required. The emails of the testers to be added to the group. A maximum of 999 and a minimum of 1 tester can be created in a batch. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1_batch_join_group_request import GoogleFirebaseAppdistroV1BatchJoinGroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1BatchJoinGroupRequest from a JSON string
google_firebase_appdistro_v1_batch_join_group_request_instance = GoogleFirebaseAppdistroV1BatchJoinGroupRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1BatchJoinGroupRequest.to_json())

# convert the object into a dict
google_firebase_appdistro_v1_batch_join_group_request_dict = google_firebase_appdistro_v1_batch_join_group_request_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1BatchJoinGroupRequest from a dict
google_firebase_appdistro_v1_batch_join_group_request_from_dict = GoogleFirebaseAppdistroV1BatchJoinGroupRequest.from_dict(google_firebase_appdistro_v1_batch_join_group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


