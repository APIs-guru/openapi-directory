# WritableRackReservation


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
**rack** | **int** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | **int** |  | [optional] 
**units** | **List[int]** |  | 
**url** | **str** |  | [optional] [readonly] 
**user** | **int** |  | 

## Example

```python
from openapi_client.models.writable_rack_reservation import WritableRackReservation

# TODO update the JSON string below
json = "{}"
# create an instance of WritableRackReservation from a JSON string
writable_rack_reservation_instance = WritableRackReservation.from_json(json)
# print the JSON string representation of the object
print(WritableRackReservation.to_json())

# convert the object into a dict
writable_rack_reservation_dict = writable_rack_reservation_instance.to_dict()
# create an instance of WritableRackReservation from a dict
writable_rack_reservation_from_dict = WritableRackReservation.from_dict(writable_rack_reservation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


