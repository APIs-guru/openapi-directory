# ListSourcesResponse

Response message for 'ListSources' request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Output only. A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] [readonly] 
**sources** | [**List[Source]**](Source.md) | Output only. The list of sources response. | [optional] [readonly] 
**unreachable** | **List[str]** | Output only. Locations that could not be reached. | [optional] [readonly] 

## Example

```python
from openapi_client.models.list_sources_response import ListSourcesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSourcesResponse from a JSON string
list_sources_response_instance = ListSourcesResponse.from_json(json)
# print the JSON string representation of the object
print(ListSourcesResponse.to_json())

# convert the object into a dict
list_sources_response_dict = list_sources_response_instance.to_dict()
# create an instance of ListSourcesResponse from a dict
list_sources_response_from_dict = ListSourcesResponse.from_dict(list_sources_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


