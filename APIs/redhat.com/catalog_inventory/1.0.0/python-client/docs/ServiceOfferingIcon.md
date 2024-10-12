# ServiceOfferingIcon


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived_at** | **datetime** |  | [optional] [readonly] 
**created_at** | **datetime** |  | [optional] [readonly] 
**data** | **str** | Raw icon data | [optional] [readonly] 
**id** | **str** | ID of the resource | [optional] [readonly] 
**last_seen_at** | **datetime** |  | [optional] [readonly] 
**refresh_state_part_id** | **str** | ID of the resource | [optional] [readonly] 
**source_id** | **str** | ID of the resource | [optional] [readonly] 
**source_ref** | **str** |  | [optional] [readonly] 
**updated_at** | **datetime** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_offering_icon import ServiceOfferingIcon

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceOfferingIcon from a JSON string
service_offering_icon_instance = ServiceOfferingIcon.from_json(json)
# print the JSON string representation of the object
print(ServiceOfferingIcon.to_json())

# convert the object into a dict
service_offering_icon_dict = service_offering_icon_instance.to_dict()
# create an instance of ServiceOfferingIcon from a dict
service_offering_icon_from_dict = ServiceOfferingIcon.from_dict(service_offering_icon_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


