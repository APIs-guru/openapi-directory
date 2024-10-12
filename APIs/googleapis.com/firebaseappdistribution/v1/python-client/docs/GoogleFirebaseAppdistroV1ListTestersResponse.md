# GoogleFirebaseAppdistroV1ListTestersResponse

The response message for `ListTesters`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A short-lived token, which can be sent as &#x60;pageToken&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**testers** | [**List[GoogleFirebaseAppdistroV1Tester]**](GoogleFirebaseAppdistroV1Tester.md) | The testers listed. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1_list_testers_response import GoogleFirebaseAppdistroV1ListTestersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1ListTestersResponse from a JSON string
google_firebase_appdistro_v1_list_testers_response_instance = GoogleFirebaseAppdistroV1ListTestersResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1ListTestersResponse.to_json())

# convert the object into a dict
google_firebase_appdistro_v1_list_testers_response_dict = google_firebase_appdistro_v1_list_testers_response_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1ListTestersResponse from a dict
google_firebase_appdistro_v1_list_testers_response_from_dict = GoogleFirebaseAppdistroV1ListTestersResponse.from_dict(google_firebase_appdistro_v1_list_testers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


