# ServicePlan


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived_at** | **datetime** |  | [optional] [readonly] 
**create_json_schema** | **object** |  | [optional] [readonly] 
**created_at** | **datetime** |  | [optional] [readonly] 
**description** | **str** |  | [optional] [readonly] 
**extra** | **object** | Extra information about this object in JSON format | [optional] [readonly] 
**id** | **str** | ID of the resource | [optional] [readonly] 
**last_seen_at** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | [optional] [readonly] 
**refresh_state_part_id** | **str** | ID of the resource | [optional] [readonly] 
**resource_version** | **str** |  | [optional] [readonly] 
**service_offering_id** | **str** | ID of the resource | [optional] [readonly] 
**source_created_at** | **datetime** |  | [optional] [readonly] 
**source_deleted_at** | **datetime** |  | [optional] [readonly] 
**source_id** | **str** | ID of the resource | [optional] [readonly] 
**source_ref** | **str** |  | [optional] [readonly] 
**update_json_schema** | **str** |  | [optional] [readonly] 
**updated_at** | **datetime** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_plan import ServicePlan

# TODO update the JSON string below
json = "{}"
# create an instance of ServicePlan from a JSON string
service_plan_instance = ServicePlan.from_json(json)
# print the JSON string representation of the object
print(ServicePlan.to_json())

# convert the object into a dict
service_plan_dict = service_plan_instance.to_dict()
# create an instance of ServicePlan from a dict
service_plan_from_dict = ServicePlan.from_dict(service_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


