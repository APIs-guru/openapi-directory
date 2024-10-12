# ListAndroidAppsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apps** | [**List[AndroidApp]**](AndroidApp.md) | List of each &#x60;AndroidApp&#x60; associated with the specified &#x60;FirebaseProject&#x60;. | [optional] 
**next_page_token** | **str** | If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent call to &#x60;ListAndroidApps&#x60; to find the next group of Apps. Page tokens are short-lived and should not be persisted. | [optional] 

## Example

```python
from openapi_client.models.list_android_apps_response import ListAndroidAppsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAndroidAppsResponse from a JSON string
list_android_apps_response_instance = ListAndroidAppsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAndroidAppsResponse.to_json())

# convert the object into a dict
list_android_apps_response_dict = list_android_apps_response_instance.to_dict()
# create an instance of ListAndroidAppsResponse from a dict
list_android_apps_response_from_dict = ListAndroidAppsResponse.from_dict(list_android_apps_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


