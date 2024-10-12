# InventorySourceAssignedTargetingOptionDetails

Targeting details for inventory source. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_INVENTORY_SOURCE`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inventory_source_id** | **str** | Required. ID of the inventory source. Should refer to the inventory_source_id field of an InventorySource resource. | [optional] 

## Example

```python
from openapi_client.models.inventory_source_assigned_targeting_option_details import InventorySourceAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of InventorySourceAssignedTargetingOptionDetails from a JSON string
inventory_source_assigned_targeting_option_details_instance = InventorySourceAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(InventorySourceAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
inventory_source_assigned_targeting_option_details_dict = inventory_source_assigned_targeting_option_details_instance.to_dict()
# create an instance of InventorySourceAssignedTargetingOptionDetails from a dict
inventory_source_assigned_targeting_option_details_from_dict = InventorySourceAssignedTargetingOptionDetails.from_dict(inventory_source_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


