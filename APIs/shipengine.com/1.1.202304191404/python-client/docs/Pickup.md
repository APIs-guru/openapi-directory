# Pickup

The information necessary to schedule a package pickup 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancelled_at** | **datetime** | The date and time that the pickup was cancelled in ShipEngine. | [optional] [readonly] 
**carrier_id** | **str** | The carrier_id associated with the pickup | [optional] [readonly] 
**confirmation_number** | **str** | The carrier confirmation number for the scheduled pickup. | [optional] [readonly] 
**contact_details** | [**ContactDetails**](ContactDetails.md) |  | [optional] 
**created_at** | **datetime** | The date and time that the pickup was created in ShipEngine. | [optional] [readonly] 
**label_ids** | **List[str]** | Label IDs that will be included in the pickup request | [optional] 
**pickup_address** | [**Address**](Address.md) |  | [optional] [readonly] 
**pickup_id** | **str** | Pickup Resource ID | [optional] [readonly] 
**pickup_notes** | **str** | Used by some carriers to give special instructions for a package pickup | [optional] 
**pickup_window** | [**PickupWindow**](PickupWindow.md) |  | [optional] 
**pickup_windows** | [**List[PickupWindows]**](PickupWindows.md) | An array of available pickup windows. Carriers can return multiple times that they will pickup packages.  | [optional] [readonly] 
**warehouse_id** | **str** | The warehouse_id associated with the pickup | [optional] [readonly] 

## Example

```python
from openapi_client.models.pickup import Pickup

# TODO update the JSON string below
json = "{}"
# create an instance of Pickup from a JSON string
pickup_instance = Pickup.from_json(json)
# print the JSON string representation of the object
print(Pickup.to_json())

# convert the object into a dict
pickup_dict = pickup_instance.to_dict()
# create an instance of Pickup from a dict
pickup_from_dict = Pickup.from_dict(pickup_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


