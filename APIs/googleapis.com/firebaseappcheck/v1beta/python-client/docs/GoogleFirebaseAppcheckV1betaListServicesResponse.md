# GoogleFirebaseAppcheckV1betaListServicesResponse

Response message for the ListServices method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If the result list is too large to fit in a single response, then a token is returned. If the string is empty or omitted, then this response is the last page of results. This token can be used in a subsequent call to ListServices to find the next group of Services. Page tokens are short-lived and should not be persisted. | [optional] 
**services** | [**List[GoogleFirebaseAppcheckV1betaService]**](GoogleFirebaseAppcheckV1betaService.md) | The Services retrieved. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1beta_list_services_response import GoogleFirebaseAppcheckV1betaListServicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1betaListServicesResponse from a JSON string
google_firebase_appcheck_v1beta_list_services_response_instance = GoogleFirebaseAppcheckV1betaListServicesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1betaListServicesResponse.to_json())

# convert the object into a dict
google_firebase_appcheck_v1beta_list_services_response_dict = google_firebase_appcheck_v1beta_list_services_response_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1betaListServicesResponse from a dict
google_firebase_appcheck_v1beta_list_services_response_from_dict = GoogleFirebaseAppcheckV1betaListServicesResponse.from_dict(google_firebase_appcheck_v1beta_list_services_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


