# ListIosAppsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apps** | [**List[IosApp]**](IosApp.md) | List of each &#x60;IosApp&#x60; associated with the specified &#x60;FirebaseProject&#x60;. | [optional] 
**next_page_token** | **str** | If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent call to &#x60;ListIosApps&#x60; to find the next group of Apps. Page tokens are short-lived and should not be persisted. | [optional] 

## Example

```python
from openapi_client.models.list_ios_apps_response import ListIosAppsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListIosAppsResponse from a JSON string
list_ios_apps_response_instance = ListIosAppsResponse.from_json(json)
# print the JSON string representation of the object
print(ListIosAppsResponse.to_json())

# convert the object into a dict
list_ios_apps_response_dict = list_ios_apps_response_instance.to_dict()
# create an instance of ListIosAppsResponse from a dict
list_ios_apps_response_from_dict = ListIosAppsResponse.from_dict(list_ios_apps_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


