# NodeReimageParameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_reimage_option** | **str** | The default value is requeue. | [optional] 

## Example

```python
from openapi_client.models.node_reimage_parameter import NodeReimageParameter

# TODO update the JSON string below
json = "{}"
# create an instance of NodeReimageParameter from a JSON string
node_reimage_parameter_instance = NodeReimageParameter.from_json(json)
# print the JSON string representation of the object
print(NodeReimageParameter.to_json())

# convert the object into a dict
node_reimage_parameter_dict = node_reimage_parameter_instance.to_dict()
# create an instance of NodeReimageParameter from a dict
node_reimage_parameter_from_dict = NodeReimageParameter.from_dict(node_reimage_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


