# ListNodesResponse

Response message for VmwareEngine.ListNodes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**nodes** | [**List[Node]**](Node.md) | The nodes. | [optional] 

## Example

```python
from openapi_client.models.list_nodes_response import ListNodesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListNodesResponse from a JSON string
list_nodes_response_instance = ListNodesResponse.from_json(json)
# print the JSON string representation of the object
print(ListNodesResponse.to_json())

# convert the object into a dict
list_nodes_response_dict = list_nodes_response_instance.to_dict()
# create an instance of ListNodesResponse from a dict
list_nodes_response_from_dict = ListNodesResponse.from_dict(list_nodes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


