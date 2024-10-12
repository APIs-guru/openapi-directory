# BulkEditAssignedInventorySourcesRequest

Request message for AssignedInventorySourceService.BulkEdit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertiser_id** | **str** | The ID of the advertiser that owns the parent inventory source group. The parent partner does not have access to these assigned inventory sources. | [optional] 
**created_assigned_inventory_sources** | [**List[AssignedInventorySource]**](AssignedInventorySource.md) | The assigned inventory sources to create in bulk, specified as a list of AssignedInventorySources. | [optional] 
**deleted_assigned_inventory_sources** | **List[str]** | The IDs of the assigned inventory sources to delete in bulk, specified as a list of assigned_inventory_source_ids. | [optional] 
**partner_id** | **str** | The ID of the partner that owns the inventory source group. Only this partner has write access to these assigned inventory sources. | [optional] 

## Example

```python
from openapi_client.models.bulk_edit_assigned_inventory_sources_request import BulkEditAssignedInventorySourcesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkEditAssignedInventorySourcesRequest from a JSON string
bulk_edit_assigned_inventory_sources_request_instance = BulkEditAssignedInventorySourcesRequest.from_json(json)
# print the JSON string representation of the object
print(BulkEditAssignedInventorySourcesRequest.to_json())

# convert the object into a dict
bulk_edit_assigned_inventory_sources_request_dict = bulk_edit_assigned_inventory_sources_request_instance.to_dict()
# create an instance of BulkEditAssignedInventorySourcesRequest from a dict
bulk_edit_assigned_inventory_sources_request_from_dict = BulkEditAssignedInventorySourcesRequest.from_dict(bulk_edit_assigned_inventory_sources_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


