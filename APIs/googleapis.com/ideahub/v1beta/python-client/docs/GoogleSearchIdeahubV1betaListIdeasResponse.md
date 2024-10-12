# GoogleSearchIdeahubV1betaListIdeasResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ideas** | [**List[GoogleSearchIdeahubV1betaIdea]**](GoogleSearchIdeahubV1betaIdea.md) | Results for the ListIdeasRequest. | [optional] 
**next_page_token** | **str** | Used to fetch the next page in a subsequent request. | [optional] 

## Example

```python
from openapi_client.models.google_search_ideahub_v1beta_list_ideas_response import GoogleSearchIdeahubV1betaListIdeasResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSearchIdeahubV1betaListIdeasResponse from a JSON string
google_search_ideahub_v1beta_list_ideas_response_instance = GoogleSearchIdeahubV1betaListIdeasResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleSearchIdeahubV1betaListIdeasResponse.to_json())

# convert the object into a dict
google_search_ideahub_v1beta_list_ideas_response_dict = google_search_ideahub_v1beta_list_ideas_response_instance.to_dict()
# create an instance of GoogleSearchIdeahubV1betaListIdeasResponse from a dict
google_search_ideahub_v1beta_list_ideas_response_from_dict = GoogleSearchIdeahubV1betaListIdeasResponse.from_dict(google_search_ideahub_v1beta_list_ideas_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


