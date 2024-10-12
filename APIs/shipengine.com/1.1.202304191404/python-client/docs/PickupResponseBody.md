# PickupResponseBody

A pickup response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancelled_at** | **datetime** | The date and time that the pickup was cancelled in ShipEngine. | [optional] [readonly] 
**carrier_id** | **str** | The carrier_id associated with the pickup | [readonly] 
**confirmation_number** | **str** | The carrier confirmation number for the scheduled pickup. | [readonly] 
**contact_details** | [**ContactDetails**](ContactDetails.md) |  | 
**created_at** | **datetime** | The date and time that the pickup was created in ShipEngine. | [readonly] 
**label_ids** | **List[str]** | Label IDs that will be included in the pickup request | 
**pickup_address** | [**Address**](Address.md) |  | [readonly] 
**pickup_id** | **str** | Pickup Resource ID | [readonly] 
**pickup_notes** | **str** | Used by some carriers to give special instructions for a package pickup | [optional] 
**pickup_window** | [**PickupWindow**](PickupWindow.md) |  | 
**pickup_windows** | [**List[PickupWindows]**](PickupWindows.md) | An array of available pickup windows. Carriers can return multiple times that they will pickup packages.  | [optional] [readonly] 
**warehouse_id** | **str** | The warehouse_id associated with the pickup | [readonly] 

## Example

```python
from openapi_client.models.pickup_response_body import PickupResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of PickupResponseBody from a JSON string
pickup_response_body_instance = PickupResponseBody.from_json(json)
# print the JSON string representation of the object
print(PickupResponseBody.to_json())

# convert the object into a dict
pickup_response_body_dict = pickup_response_body_instance.to_dict()
# create an instance of PickupResponseBody from a dict
pickup_response_body_from_dict = PickupResponseBody.from_dict(pickup_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


