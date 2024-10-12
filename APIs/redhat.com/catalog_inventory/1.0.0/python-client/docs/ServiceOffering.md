# ServiceOffering


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived_at** | **datetime** |  | [optional] [readonly] 
**created_at** | **datetime** |  | [optional] [readonly] 
**description** | **str** |  | [optional] [readonly] 
**display_name** | **str** |  | [optional] [readonly] 
**distributor** | **str** |  | [optional] [readonly] 
**documentation_url** | **str** |  | [optional] [readonly] 
**extra** | **object** | Extra information about this object in JSON format | [optional] [readonly] 
**id** | **str** | ID of the resource | [optional] [readonly] 
**last_seen_at** | **datetime** |  | [optional] [readonly] 
**long_description** | **str** |  | [optional] [readonly] 
**name** | **str** |  | [optional] [readonly] 
**refresh_state_part_id** | **str** | ID of the resource | [optional] [readonly] 
**service_inventory_id** | **str** | ID of the resource | [optional] [readonly] 
**source_created_at** | **datetime** |  | [optional] [readonly] 
**source_deleted_at** | **datetime** |  | [optional] [readonly] 
**source_id** | **str** | ID of the resource | [optional] [readonly] 
**source_ref** | **str** | The native reference used by the Source to refer to this object | [optional] [readonly] 
**support_url** | **str** |  | [optional] [readonly] 
**updated_at** | **datetime** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_offering import ServiceOffering

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceOffering from a JSON string
service_offering_instance = ServiceOffering.from_json(json)
# print the JSON string representation of the object
print(ServiceOffering.to_json())

# convert the object into a dict
service_offering_dict = service_offering_instance.to_dict()
# create an instance of ServiceOffering from a dict
service_offering_from_dict = ServiceOffering.from_dict(service_offering_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


