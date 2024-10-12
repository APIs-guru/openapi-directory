# InventorySourceGroupAssignedTargetingOptionDetails

Targeting details for inventory source group. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_INVENTORY_SOURCE_GROUP`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inventory_source_group_id** | **str** | Required. ID of the inventory source group. Should refer to the inventory_source_group_id field of an InventorySourceGroup resource. | [optional] 

## Example

```python
from openapi_client.models.inventory_source_group_assigned_targeting_option_details import InventorySourceGroupAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of InventorySourceGroupAssignedTargetingOptionDetails from a JSON string
inventory_source_group_assigned_targeting_option_details_instance = InventorySourceGroupAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(InventorySourceGroupAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
inventory_source_group_assigned_targeting_option_details_dict = inventory_source_group_assigned_targeting_option_details_instance.to_dict()
# create an instance of InventorySourceGroupAssignedTargetingOptionDetails from a dict
inventory_source_group_assigned_targeting_option_details_from_dict = InventorySourceGroupAssignedTargetingOptionDetails.from_dict(inventory_source_group_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


