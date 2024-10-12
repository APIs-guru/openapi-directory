# GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse

The response of listing phrase matchers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**phrase_matchers** | [**List[GoogleCloudContactcenterinsightsV1PhraseMatcher]**](GoogleCloudContactcenterinsightsV1PhraseMatcher.md) | The phrase matchers that match the request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_list_phrase_matchers_response import GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse from a JSON string
google_cloud_contactcenterinsights_v1_list_phrase_matchers_response_instance = GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_list_phrase_matchers_response_dict = google_cloud_contactcenterinsights_v1_list_phrase_matchers_response_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse from a dict
google_cloud_contactcenterinsights_v1_list_phrase_matchers_response_from_dict = GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse.from_dict(google_cloud_contactcenterinsights_v1_list_phrase_matchers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


