# GoogleSearchIdeahubV1betaListAvailableLocalesResponse

Response for whether ideas are available for a given web property on a platform, for the currently logged-in user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_locales** | [**List[GoogleSearchIdeahubV1betaAvailableLocale]**](GoogleSearchIdeahubV1betaAvailableLocale.md) | Locales for which ideas are available for the given Creator. | [optional] 
**next_page_token** | **str** | A token that can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_search_ideahub_v1beta_list_available_locales_response import GoogleSearchIdeahubV1betaListAvailableLocalesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSearchIdeahubV1betaListAvailableLocalesResponse from a JSON string
google_search_ideahub_v1beta_list_available_locales_response_instance = GoogleSearchIdeahubV1betaListAvailableLocalesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleSearchIdeahubV1betaListAvailableLocalesResponse.to_json())

# convert the object into a dict
google_search_ideahub_v1beta_list_available_locales_response_dict = google_search_ideahub_v1beta_list_available_locales_response_instance.to_dict()
# create an instance of GoogleSearchIdeahubV1betaListAvailableLocalesResponse from a dict
google_search_ideahub_v1beta_list_available_locales_response_from_dict = GoogleSearchIdeahubV1betaListAvailableLocalesResponse.from_dict(google_search_ideahub_v1beta_list_available_locales_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


