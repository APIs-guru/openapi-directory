# GoogleFirebaseAppdistroV1BatchAddTestersRequest

The Request message for batch adding testers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emails** | **List[str]** | Required. The email addresses of the tester resources to create. A maximum of 999 and a minimum of 1 tester can be created in a batch. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1_batch_add_testers_request import GoogleFirebaseAppdistroV1BatchAddTestersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1BatchAddTestersRequest from a JSON string
google_firebase_appdistro_v1_batch_add_testers_request_instance = GoogleFirebaseAppdistroV1BatchAddTestersRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1BatchAddTestersRequest.to_json())

# convert the object into a dict
google_firebase_appdistro_v1_batch_add_testers_request_dict = google_firebase_appdistro_v1_batch_add_testers_request_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1BatchAddTestersRequest from a dict
google_firebase_appdistro_v1_batch_add_testers_request_from_dict = GoogleFirebaseAppdistroV1BatchAddTestersRequest.from_dict(google_firebase_appdistro_v1_batch_add_testers_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


