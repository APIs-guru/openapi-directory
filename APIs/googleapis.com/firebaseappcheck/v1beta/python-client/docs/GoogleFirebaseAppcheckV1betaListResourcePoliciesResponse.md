# GoogleFirebaseAppcheckV1betaListResourcePoliciesResponse

Response message for the ListResourcePolicies method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If the result list is too large to fit in a single response, then a token is returned. If the string is empty or omitted, then this response is the last page of results. This token can be used in a subsequent call to ListResourcePolicies to find the next group of ResourcePolicys. Page tokens are short-lived and should not be persisted. | [optional] 
**resource_policies** | [**List[GoogleFirebaseAppcheckV1betaResourcePolicy]**](GoogleFirebaseAppcheckV1betaResourcePolicy.md) | The ResourcePolicys retrieved. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_appcheck_v1beta_list_resource_policies_response import GoogleFirebaseAppcheckV1betaListResourcePoliciesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppcheckV1betaListResourcePoliciesResponse from a JSON string
google_firebase_appcheck_v1beta_list_resource_policies_response_instance = GoogleFirebaseAppcheckV1betaListResourcePoliciesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppcheckV1betaListResourcePoliciesResponse.to_json())

# convert the object into a dict
google_firebase_appcheck_v1beta_list_resource_policies_response_dict = google_firebase_appcheck_v1beta_list_resource_policies_response_instance.to_dict()
# create an instance of GoogleFirebaseAppcheckV1betaListResourcePoliciesResponse from a dict
google_firebase_appcheck_v1beta_list_resource_policies_response_from_dict = GoogleFirebaseAppcheckV1betaListResourcePoliciesResponse.from_dict(google_firebase_appcheck_v1beta_list_resource_policies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


