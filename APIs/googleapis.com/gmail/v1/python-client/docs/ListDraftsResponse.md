# ListDraftsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**drafts** | [**List[Draft]**](Draft.md) | List of drafts. Note that the &#x60;Message&#x60; property in each &#x60;Draft&#x60; resource only contains an &#x60;id&#x60; and a &#x60;threadId&#x60;. The messages.get method can fetch additional message details. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results in the list. | [optional] 
**result_size_estimate** | **int** | Estimated total number of results. | [optional] 

## Example

```python
from openapi_client.models.list_drafts_response import ListDraftsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDraftsResponse from a JSON string
list_drafts_response_instance = ListDraftsResponse.from_json(json)
# print the JSON string representation of the object
print(ListDraftsResponse.to_json())

# convert the object into a dict
list_drafts_response_dict = list_drafts_response_instance.to_dict()
# create an instance of ListDraftsResponse from a dict
list_drafts_response_from_dict = ListDraftsResponse.from_dict(list_drafts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


