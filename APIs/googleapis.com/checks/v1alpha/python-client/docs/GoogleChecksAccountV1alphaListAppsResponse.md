# GoogleChecksAccountV1alphaListAppsResponse

The response message for AccountService.ListApps.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apps** | [**List[GoogleChecksAccountV1alphaApp]**](GoogleChecksAccountV1alphaApp.md) | The apps. | [optional] 
**next_page_token** | **str** | A token which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_checks_account_v1alpha_list_apps_response import GoogleChecksAccountV1alphaListAppsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChecksAccountV1alphaListAppsResponse from a JSON string
google_checks_account_v1alpha_list_apps_response_instance = GoogleChecksAccountV1alphaListAppsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleChecksAccountV1alphaListAppsResponse.to_json())

# convert the object into a dict
google_checks_account_v1alpha_list_apps_response_dict = google_checks_account_v1alpha_list_apps_response_instance.to_dict()
# create an instance of GoogleChecksAccountV1alphaListAppsResponse from a dict
google_checks_account_v1alpha_list_apps_response_from_dict = GoogleChecksAccountV1alphaListAppsResponse.from_dict(google_checks_account_v1alpha_list_apps_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


