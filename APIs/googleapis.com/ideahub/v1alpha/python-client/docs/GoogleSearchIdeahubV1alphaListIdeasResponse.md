# GoogleSearchIdeahubV1alphaListIdeasResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ideas** | [**List[GoogleSearchIdeahubV1alphaIdea]**](GoogleSearchIdeahubV1alphaIdea.md) | Results for the ListIdeasRequest. | [optional] 
**next_page_token** | **str** | Used to fetch the next page in a subsequent request. | [optional] 

## Example

```python
from openapi_client.models.google_search_ideahub_v1alpha_list_ideas_response import GoogleSearchIdeahubV1alphaListIdeasResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSearchIdeahubV1alphaListIdeasResponse from a JSON string
google_search_ideahub_v1alpha_list_ideas_response_instance = GoogleSearchIdeahubV1alphaListIdeasResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleSearchIdeahubV1alphaListIdeasResponse.to_json())

# convert the object into a dict
google_search_ideahub_v1alpha_list_ideas_response_dict = google_search_ideahub_v1alpha_list_ideas_response_instance.to_dict()
# create an instance of GoogleSearchIdeahubV1alphaListIdeasResponse from a dict
google_search_ideahub_v1alpha_list_ideas_response_from_dict = GoogleSearchIdeahubV1alphaListIdeasResponse.from_dict(google_search_ideahub_v1alpha_list_ideas_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


