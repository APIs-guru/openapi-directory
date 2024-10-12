# ListNodeTypesResponse

Response message for VmwareEngine.ListNodeTypes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**node_types** | [**List[NodeType]**](NodeType.md) | A list of Node Types. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached when making an aggregated query using wildcards. | [optional] 

## Example

```python
from openapi_client.models.list_node_types_response import ListNodeTypesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListNodeTypesResponse from a JSON string
list_node_types_response_instance = ListNodeTypesResponse.from_json(json)
# print the JSON string representation of the object
print(ListNodeTypesResponse.to_json())

# convert the object into a dict
list_node_types_response_dict = list_node_types_response_instance.to_dict()
# create an instance of ListNodeTypesResponse from a dict
list_node_types_response_from_dict = ListNodeTypesResponse.from_dict(list_node_types_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


