# ServiceInstance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived_at** | **datetime** |  | [optional] [readonly] 
**created_at** | **datetime** |  | [optional] [readonly] 
**external_url** | **str** |  | [optional] [readonly] 
**extra** | **object** | Extra information about this object in JSON format | [optional] [readonly] 
**id** | **str** | ID of the resource | [optional] [readonly] 
**last_seen_at** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | [optional] [readonly] 
**refresh_state_part_id** | **str** | ID of the resource | [optional] [readonly] 
**root_service_instance_id** | **str** | ID of the resource | [optional] [readonly] 
**service_inventory_id** | **str** | ID of the resource | [optional] [readonly] 
**service_offering_id** | **str** | ID of the resource | [optional] [readonly] 
**service_plan_id** | **str** | ID of the resource | [optional] [readonly] 
**source_created_at** | **datetime** |  | [optional] [readonly] 
**source_deleted_at** | **datetime** |  | [optional] [readonly] 
**source_id** | **str** | ID of the resource | [optional] [readonly] 
**source_ref** | **str** |  | [optional] [readonly] 
**updated_at** | **datetime** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_instance import ServiceInstance

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceInstance from a JSON string
service_instance_instance = ServiceInstance.from_json(json)
# print the JSON string representation of the object
print(ServiceInstance.to_json())

# convert the object into a dict
service_instance_dict = service_instance_instance.to_dict()
# create an instance of ServiceInstance from a dict
service_instance_from_dict = ServiceInstance.from_dict(service_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


