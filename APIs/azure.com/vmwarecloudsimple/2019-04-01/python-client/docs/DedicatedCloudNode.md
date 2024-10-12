# DedicatedCloudNode

Dedicated cloud node model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/dedicatedCloudNodes/{dedicatedCloudNodeName} | [optional] [readonly] 
**location** | **str** | Azure region | 
**name** | **str** | {dedicatedCloudNodeName} | [optional] [readonly] 
**properties** | [**DedicatedCloudNodeProperties**](DedicatedCloudNodeProperties.md) |  | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Tags model | [optional] 
**type** | **str** | {resourceProviderNamespace}/{resourceType} | [optional] [readonly] 

## Example

```python
from openapi_client.models.dedicated_cloud_node import DedicatedCloudNode

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedCloudNode from a JSON string
dedicated_cloud_node_instance = DedicatedCloudNode.from_json(json)
# print the JSON string representation of the object
print(DedicatedCloudNode.to_json())

# convert the object into a dict
dedicated_cloud_node_dict = dedicated_cloud_node_instance.to_dict()
# create an instance of DedicatedCloudNode from a dict
dedicated_cloud_node_from_dict = DedicatedCloudNode.from_dict(dedicated_cloud_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


