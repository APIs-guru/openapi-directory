# DedicatedCloudNodeProperties

Properties of dedicated cloud node

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability_zone_id** | **str** | Availability Zone id, e.g. \&quot;az1\&quot; | 
**availability_zone_name** | **str** | Availability Zone name, e.g. \&quot;Availability Zone 1\&quot; | [optional] [readonly] 
**cloud_rack_name** | **str** | VMWare Cloud Rack Name | [optional] [readonly] 
**created** | **object** | date time the resource was created | [optional] [readonly] 
**nodes_count** | **int** | count of nodes to create | 
**placement_group_id** | **str** | Placement Group id, e.g. \&quot;n1\&quot; | 
**placement_group_name** | **str** | Placement Name, e.g. \&quot;Placement Group 1\&quot; | [optional] [readonly] 
**private_cloud_id** | **str** | Private Cloud Id | [optional] [readonly] 
**private_cloud_name** | **str** | Resource Pool Name | [optional] [readonly] 
**provisioning_state** | **str** | The provisioning status of the resource | [optional] [readonly] 
**purchase_id** | **str** | purchase id | 
**sku_description** | [**SkuDescription**](SkuDescription.md) |  | [optional] 
**status** | **str** | Node status, indicates is private cloud set up on this node or not | [optional] [readonly] 
**vmware_cluster_name** | **str** | VMWare Cluster Name | [optional] [readonly] 

## Example

```python
from openapi_client.models.dedicated_cloud_node_properties import DedicatedCloudNodeProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedCloudNodeProperties from a JSON string
dedicated_cloud_node_properties_instance = DedicatedCloudNodeProperties.from_json(json)
# print the JSON string representation of the object
print(DedicatedCloudNodeProperties.to_json())

# convert the object into a dict
dedicated_cloud_node_properties_dict = dedicated_cloud_node_properties_instance.to_dict()
# create an instance of DedicatedCloudNodeProperties from a dict
dedicated_cloud_node_properties_from_dict = DedicatedCloudNodeProperties.from_dict(dedicated_cloud_node_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


