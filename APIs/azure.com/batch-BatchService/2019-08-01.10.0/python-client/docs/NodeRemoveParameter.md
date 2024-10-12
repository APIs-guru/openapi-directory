# NodeRemoveParameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_deallocation_option** | [**ComputeNodeDeallocationOption**](ComputeNodeDeallocationOption.md) |  | [optional] 
**node_list** | **List[str]** |  | 
**resize_timeout** | **str** | The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). | [optional] 

## Example

```python
from openapi_client.models.node_remove_parameter import NodeRemoveParameter

# TODO update the JSON string below
json = "{}"
# create an instance of NodeRemoveParameter from a JSON string
node_remove_parameter_instance = NodeRemoveParameter.from_json(json)
# print the JSON string representation of the object
print(NodeRemoveParameter.to_json())

# convert the object into a dict
node_remove_parameter_dict = node_remove_parameter_instance.to_dict()
# create an instance of NodeRemoveParameter from a dict
node_remove_parameter_from_dict = NodeRemoveParameter.from_dict(node_remove_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


