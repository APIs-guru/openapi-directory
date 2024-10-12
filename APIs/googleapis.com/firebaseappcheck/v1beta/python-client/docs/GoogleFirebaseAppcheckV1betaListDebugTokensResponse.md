# GoogleFirebaseAppcheckV1betaListDebugTokensResponse

Response message for the ListDebugTokens method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**debug_tokens** | [**List[GoogleFirebaseAppcheckV1betaDebugToken]**](GoogleFirebaseAppcheckV1betaDebugToken.md) | The DebugTokens retrieved. | [optional] 
**next_page_token** | **str** | If the result list is too large to fit in a single response, then a token is returned. If the string is empty or omitted, then this response is the last page of results. This token can be used in a subsequent call to ListDebugTokens to find the next group of DebugTokens. Page tokens are short-lived and should not be persisted. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1beta_list_debug_tokens_response import GoogleFirebaseAppcheckV1betaListDebugTokensResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1betaListDebugTokensResponse from a JSON string
google_firebase_appcheck_v1beta_list_debug_tokens_response_instance = GoogleFirebaseAppcheckV1betaListDebugTokensResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1betaListDebugTokensResponse.to_json())

# convert the object into a dict
google_firebase_appcheck_v1beta_list_debug_tokens_response_dict = google_firebase_appcheck_v1beta_list_debug_tokens_response_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1betaListDebugTokensResponse from a dict
google_firebase_appcheck_v1beta_list_debug_tokens_response_from_dict = GoogleFirebaseAppcheckV1betaListDebugTokensResponse.from_dict(google_firebase_appcheck_v1beta_list_debug_tokens_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


