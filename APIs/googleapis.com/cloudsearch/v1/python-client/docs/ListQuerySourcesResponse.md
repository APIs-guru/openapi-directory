# ListQuerySourcesResponse

List sources response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** |  | [optional] 
**sources** | [**List[QuerySource]**](QuerySource.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_query_sources_response import ListQuerySourcesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListQuerySourcesResponse from a JSON string
list_query_sources_response_instance = ListQuerySourcesResponse.from_json(json)
# print the JSON string representation of the object
print(ListQuerySourcesResponse.to_json())

# convert the object into a dict
list_query_sources_response_dict = list_query_sources_response_instance.to_dict()
# create an instance of ListQuerySourcesResponse from a dict
list_query_sources_response_from_dict = ListQuerySourcesResponse.from_dict(list_query_sources_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


