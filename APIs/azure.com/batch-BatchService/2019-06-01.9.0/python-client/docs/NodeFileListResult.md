# NodeFileListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_next_link** | **str** |  | [optional] 
**value** | [**List[NodeFile]**](NodeFile.md) |  | [optional] 

## Example

```python
from openapi_client.models.node_file_list_result import NodeFileListResult

# TODO update the JSON string below
json = "{}"
# create an instance of NodeFileListResult from a JSON string
node_file_list_result_instance = NodeFileListResult.from_json(json)
# print the JSON string representation of the object
print(NodeFileListResult.to_json())

# convert the object into a dict
node_file_list_result_dict = node_file_list_result_instance.to_dict()
# create an instance of NodeFileListResult from a dict
node_file_list_result_from_dict = NodeFileListResult.from_dict(node_file_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


