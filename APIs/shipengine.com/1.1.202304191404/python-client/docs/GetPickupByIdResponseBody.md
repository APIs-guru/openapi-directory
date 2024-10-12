# GetPickupByIdResponseBody


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
**errors** | [**List[Error]**](Error.md) | The errors associated with the failed API call | [readonly] 
**request_id** | **str** | A UUID that uniquely identifies the request id. This can be given to the support team to help debug non-trivial issues that may occur  | 

## Example

```python
from openapi_client.models.get_pickup_by_id_response_body import GetPickupByIdResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of GetPickupByIdResponseBody from a JSON string
get_pickup_by_id_response_body_instance = GetPickupByIdResponseBody.from_json(json)
# print the JSON string representation of the object
print(GetPickupByIdResponseBody.to_json())

# convert the object into a dict
get_pickup_by_id_response_body_dict = get_pickup_by_id_response_body_instance.to_dict()
# create an instance of GetPickupByIdResponseBody from a dict
get_pickup_by_id_response_body_from_dict = GetPickupByIdResponseBody.from_dict(get_pickup_by_id_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


