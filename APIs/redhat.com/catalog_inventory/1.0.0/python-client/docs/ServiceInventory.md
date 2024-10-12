# ServiceInventory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived_at** | **datetime** |  | [optional] [readonly] 
**created_at** | **datetime** |  | [optional] [readonly] 
**description** | **str** |  | [optional] [readonly] 
**extra** | **object** |  | [optional] [readonly] 
**id** | **str** | ID of the resource | [optional] [readonly] 
**last_seen_at** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | [optional] [readonly] 
**refresh_state_part_id** | **str** | ID of the resource | [optional] [readonly] 
**source_created_at** | **datetime** |  | [optional] [readonly] 
**source_id** | **str** | ID of the resource | [optional] [readonly] 
**source_ref** | **str** |  | [optional] [readonly] 
**source_updated_at** | **datetime** |  | [optional] [readonly] 
**updated_at** | **datetime** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_inventory import ServiceInventory

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceInventory from a JSON string
service_inventory_instance = ServiceInventory.from_json(json)
# print the JSON string representation of the object
print(ServiceInventory.to_json())

# convert the object into a dict
service_inventory_dict = service_inventory_instance.to_dict()
# create an instance of ServiceInventory from a dict
service_inventory_from_dict = ServiceInventory.from_dict(service_inventory_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


