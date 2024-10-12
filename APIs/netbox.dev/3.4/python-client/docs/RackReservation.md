# RackReservation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**rack** | [**NestedRack**](NestedRack.md) |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | [**NestedTenant**](NestedTenant.md) |  | [optional] 
**units** | **List[int]** |  | 
**url** | **str** |  | [optional] [readonly] 
**user** | [**NestedUser**](NestedUser.md) |  | 

## Example

```python
from openapi_client.models.rack_reservation import RackReservation

# TODO update the JSON string below
json = "{}"
# create an instance of RackReservation from a JSON string
rack_reservation_instance = RackReservation.from_json(json)
# print the JSON string representation of the object
print(RackReservation.to_json())

# convert the object into a dict
rack_reservation_dict = rack_reservation_instance.to_dict()
# create an instance of RackReservation from a dict
rack_reservation_from_dict = RackReservation.from_dict(rack_reservation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


