# ServiceInstanceNode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived_at** | **datetime** |  | [optional] [readonly] 
**created_at** | **datetime** |  | [optional] [readonly] 
**extra** | **object** |  | [optional] 
**id** | **str** | ID of the resource | [optional] [readonly] 
**last_seen_at** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | [optional] 
**refresh_state_part_id** | **str** | ID of the resource | [optional] [readonly] 
**root_service_instance_id** | **str** | ID of the resource | [optional] [readonly] 
**service_instance_id** | **str** | ID of the resource | [optional] [readonly] 
**service_inventory_id** | **str** | ID of the resource | [optional] [readonly] 
**source_created_at** | **datetime** |  | [optional] 
**source_id** | **str** | ID of the resource | [optional] [readonly] 
**source_ref** | **str** |  | [optional] 
**source_updated_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_instance_node import ServiceInstanceNode

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceInstanceNode from a JSON string
service_instance_node_instance = ServiceInstanceNode.from_json(json)
# print the JSON string representation of the object
print(ServiceInstanceNode.to_json())

# convert the object into a dict
service_instance_node_dict = service_instance_node_instance.to_dict()
# create an instance of ServiceInstanceNode from a dict
service_instance_node_from_dict = ServiceInstanceNode.from_dict(service_instance_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


