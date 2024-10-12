# GoogleFirebaseAppdistroV1BatchRemoveTestersResponse

The response message for `BatchRemoveTesters`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emails** | **List[str]** | List of deleted tester emails | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1_batch_remove_testers_response import GoogleFirebaseAppdistroV1BatchRemoveTestersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1BatchRemoveTestersResponse from a JSON string
google_firebase_appdistro_v1_batch_remove_testers_response_instance = GoogleFirebaseAppdistroV1BatchRemoveTestersResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1BatchRemoveTestersResponse.to_json())

# convert the object into a dict
google_firebase_appdistro_v1_batch_remove_testers_response_dict = google_firebase_appdistro_v1_batch_remove_testers_response_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1BatchRemoveTestersResponse from a dict
google_firebase_appdistro_v1_batch_remove_testers_response_from_dict = GoogleFirebaseAppdistroV1BatchRemoveTestersResponse.from_dict(google_firebase_appdistro_v1_batch_remove_testers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


