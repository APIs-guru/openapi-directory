# GoogleFirebaseAppcheckV1ListServicesResponse

Response message for the ListServices method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If the result list is too large to fit in a single response, then a token is returned. If the string is empty or omitted, then this response is the last page of results. This token can be used in a subsequent call to ListServices to find the next group of Services. Page tokens are short-lived and should not be persisted. | [optional] 
**services** | [**List[GoogleFirebaseAppcheckV1Service]**](GoogleFirebaseAppcheckV1Service.md) | The Services retrieved. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1_list_services_response import GoogleFirebaseAppcheckV1ListServicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1ListServicesResponse from a JSON string
google_firebase_appcheck_v1_list_services_response_instance = GoogleFirebaseAppcheckV1ListServicesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1ListServicesResponse.to_json())

# convert the object into a dict
google_firebase_appcheck_v1_list_services_response_dict = google_firebase_appcheck_v1_list_services_response_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1ListServicesResponse from a dict
google_firebase_appcheck_v1_list_services_response_from_dict = GoogleFirebaseAppcheckV1ListServicesResponse.from_dict(google_firebase_appcheck_v1_list_services_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


