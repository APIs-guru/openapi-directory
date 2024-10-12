# ServiceOfferingNode


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
**root_service_offering_id** | **str** | ID of the resource | [optional] [readonly] 
**service_inventory_id** | **str** | ID of the resource | [optional] [readonly] 
**service_offering_id** | **str** | ID of the resource | [optional] [readonly] 
**source_created_at** | **datetime** |  | [optional] 
**source_id** | **str** | ID of the resource | [optional] [readonly] 
**source_ref** | **str** |  | [optional] 
**source_updated_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_offering_node import ServiceOfferingNode

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceOfferingNode from a JSON string
service_offering_node_instance = ServiceOfferingNode.from_json(json)
# print the JSON string representation of the object
print(ServiceOfferingNode.to_json())

# convert the object into a dict
service_offering_node_dict = service_offering_node_instance.to_dict()
# create an instance of ServiceOfferingNode from a dict
service_offering_node_from_dict = ServiceOfferingNode.from_dict(service_offering_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


