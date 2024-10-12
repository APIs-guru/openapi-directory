# GoogleFirebaseAppdistroV1BatchAddTestersResponse

The Response message for `BatchAddTesters`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**testers** | [**List[GoogleFirebaseAppdistroV1Tester]**](GoogleFirebaseAppdistroV1Tester.md) | The testers which are created and/or already exist | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1_batch_add_testers_response import GoogleFirebaseAppdistroV1BatchAddTestersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1BatchAddTestersResponse from a JSON string
google_firebase_appdistro_v1_batch_add_testers_response_instance = GoogleFirebaseAppdistroV1BatchAddTestersResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1BatchAddTestersResponse.to_json())

# convert the object into a dict
google_firebase_appdistro_v1_batch_add_testers_response_dict = google_firebase_appdistro_v1_batch_add_testers_response_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1BatchAddTestersResponse from a dict
google_firebase_appdistro_v1_batch_add_testers_response_from_dict = GoogleFirebaseAppdistroV1BatchAddTestersResponse.from_dict(google_firebase_appdistro_v1_batch_add_testers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


