# ListEffectiveTagsResponse

The response of ListEffectiveTags.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effective_tags** | [**List[EffectiveTag]**](EffectiveTag.md) | A possibly paginated list of effective tags for the specified resource. | [optional] 
**next_page_token** | **str** | Pagination token. If the result set is too large to fit in a single response, this token is returned. It encodes the position of the current result cursor. Feeding this value into a new list request with the &#x60;page_token&#x60; parameter gives the next page of the results. When &#x60;next_page_token&#x60; is not filled in, there is no next page and the list returned is the last page in the result set. Pagination tokens have a limited lifetime. | [optional] 

## Example

```python
from openapi_client.models.list_effective_tags_response import ListEffectiveTagsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListEffectiveTagsResponse from a JSON string
list_effective_tags_response_instance = ListEffectiveTagsResponse.from_json(json)
# print the JSON string representation of the object
print(ListEffectiveTagsResponse.to_json())

# convert the object into a dict
list_effective_tags_response_dict = list_effective_tags_response_instance.to_dict()
# create an instance of ListEffectiveTagsResponse from a dict
list_effective_tags_response_from_dict = ListEffectiveTagsResponse.from_dict(list_effective_tags_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


