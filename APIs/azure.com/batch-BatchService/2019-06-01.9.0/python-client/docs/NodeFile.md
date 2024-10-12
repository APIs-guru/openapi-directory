# NodeFile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_directory** | **bool** |  | [optional] 
**name** | **str** |  | [optional] 
**properties** | [**FileProperties**](FileProperties.md) |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.node_file import NodeFile

# TODO update the JSON string below
json = "{}"
# create an instance of NodeFile from a JSON string
node_file_instance = NodeFile.from_json(json)
# print the JSON string representation of the object
print(NodeFile.to_json())

# convert the object into a dict
node_file_dict = node_file_instance.to_dict()
# create an instance of NodeFile from a dict
node_file_from_dict = NodeFile.from_dict(node_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


