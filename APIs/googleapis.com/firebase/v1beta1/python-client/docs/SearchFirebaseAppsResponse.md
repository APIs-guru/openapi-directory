# SearchFirebaseAppsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apps** | [**List[FirebaseAppInfo]**](FirebaseAppInfo.md) | One page of results from a call to &#x60;SearchFirebaseApps&#x60;. | [optional] 
**next_page_token** | **str** | If the result list is too large to fit in a single response, then a token is returned. This token can be used in a subsequent calls to &#x60;SearchFirebaseApps&#x60; to find the next group of Apps. Page tokens are short-lived and should not be persisted. | [optional] 

## Example

```python
from openapi_client.models.search_firebase_apps_response import SearchFirebaseAppsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchFirebaseAppsResponse from a JSON string
search_firebase_apps_response_instance = SearchFirebaseAppsResponse.from_json(json)
# print the JSON string representation of the object
print(SearchFirebaseAppsResponse.to_json())

# convert the object into a dict
search_firebase_apps_response_dict = search_firebase_apps_response_instance.to_dict()
# create an instance of SearchFirebaseAppsResponse from a dict
search_firebase_apps_response_from_dict = SearchFirebaseAppsResponse.from_dict(search_firebase_apps_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


