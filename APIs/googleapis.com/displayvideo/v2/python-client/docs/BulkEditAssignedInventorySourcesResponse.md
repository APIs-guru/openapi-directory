# BulkEditAssignedInventorySourcesResponse

Response message for AssignedInventorySourceService.BulkEdit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_inventory_sources** | [**List[AssignedInventorySource]**](AssignedInventorySource.md) | The list of assigned inventory sources that have been successfully created. This list will be absent if empty. | [optional] 

## Example

```python
from openapi_client.models.bulk_edit_assigned_inventory_sources_response import BulkEditAssignedInventorySourcesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkEditAssignedInventorySourcesResponse from a JSON string
bulk_edit_assigned_inventory_sources_response_instance = BulkEditAssignedInventorySourcesResponse.from_json(json)
# print the JSON string representation of the object
print(BulkEditAssignedInventorySourcesResponse.to_json())

# convert the object into a dict
bulk_edit_assigned_inventory_sources_response_dict = bulk_edit_assigned_inventory_sources_response_instance.to_dict()
# create an instance of BulkEditAssignedInventorySourcesResponse from a dict
bulk_edit_assigned_inventory_sources_response_from_dict = BulkEditAssignedInventorySourcesResponse.from_dict(bulk_edit_assigned_inventory_sources_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


