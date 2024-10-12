# SchedulePickupRequestBody

A schedule pickup request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancelled_at** | **datetime** | The date and time that the pickup was cancelled in ShipEngine. | [optional] [readonly] 
**carrier_id** | **str** | The carrier_id associated with the pickup | [optional] [readonly] 
**confirmation_number** | **str** | The carrier confirmation number for the scheduled pickup. | [optional] [readonly] 
**contact_details** | [**ContactDetails**](ContactDetails.md) |  | 
**created_at** | **datetime** | The date and time that the pickup was created in ShipEngine. | [optional] [readonly] 
**label_ids** | **List[str]** | Label IDs that will be included in the pickup request | 
**pickup_address** | [**Address**](Address.md) |  | [optional] [readonly] 
**pickup_id** | **str** | Pickup Resource ID | [optional] [readonly] 
**pickup_notes** | **str** | Used by some carriers to give special instructions for a package pickup | [optional] 
**pickup_window** | [**PickupWindow**](PickupWindow.md) |  | 
**pickup_windows** | [**List[PickupWindows]**](PickupWindows.md) | An array of available pickup windows. Carriers can return multiple times that they will pickup packages.  | [optional] [readonly] 
**warehouse_id** | **str** | The warehouse_id associated with the pickup | [optional] [readonly] 

## Example

```python
from openapi_client.models.schedule_pickup_request_body import SchedulePickupRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of SchedulePickupRequestBody from a JSON string
schedule_pickup_request_body_instance = SchedulePickupRequestBody.from_json(json)
# print the JSON string representation of the object
print(SchedulePickupRequestBody.to_json())

# convert the object into a dict
schedule_pickup_request_body_dict = schedule_pickup_request_body_instance.to_dict()
# create an instance of SchedulePickupRequestBody from a dict
schedule_pickup_request_body_from_dict = SchedulePickupRequestBody.from_dict(schedule_pickup_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


