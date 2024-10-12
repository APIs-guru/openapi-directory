# GoogleFirebaseAppdistroV1BatchLeaveGroupRequest

Request message for `BatchLeaveGroup`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emails** | **List[str]** | Required. The email addresses of the testers to be removed from the group. A maximum of 999 and a minimum of 1 testers can be removed in a batch. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1_batch_leave_group_request import GoogleFirebaseAppdistroV1BatchLeaveGroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1BatchLeaveGroupRequest from a JSON string
google_firebase_appdistro_v1_batch_leave_group_request_instance = GoogleFirebaseAppdistroV1BatchLeaveGroupRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1BatchLeaveGroupRequest.to_json())

# convert the object into a dict
google_firebase_appdistro_v1_batch_leave_group_request_dict = google_firebase_appdistro_v1_batch_leave_group_request_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1BatchLeaveGroupRequest from a dict
google_firebase_appdistro_v1_batch_leave_group_request_from_dict = GoogleFirebaseAppdistroV1BatchLeaveGroupRequest.from_dict(google_firebase_appdistro_v1_batch_leave_group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


