# NodeResource

A Node Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**etag** | **str** |  | [optional] 
**id** | **str** | Resource Manager Resource ID. | [optional] [readonly] 
**location** | **str** | Resource Manager Resource Location. | [optional] [readonly] 
**name** | **str** | Resource Manager Resource Name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource Manager Resource Tags. | [optional] 
**type** | **str** | Resource Manager Resource Type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.node_resource import NodeResource

# TODO update the JSON string below
json = "{}"
# create an instance of NodeResource from a JSON string
node_resource_instance = NodeResource.from_json(json)
# print the JSON string representation of the object
print(NodeResource.to_json())

# convert the object into a dict
node_resource_dict = node_resource_instance.to_dict()
# create an instance of NodeResource from a dict
node_resource_from_dict = NodeResource.from_dict(node_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


