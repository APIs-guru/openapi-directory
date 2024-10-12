# InventorySourceFilter

A filtering option for filtering on Inventory Source entities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inventory_source_ids** | **List[str]** | Inventory Sources to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest. Leave empty to download all Inventory Sources for the selected Advertiser or Partner. | [optional] 

## Example

```python
from openapi_client.models.inventory_source_filter import InventorySourceFilter

# TODO update the JSON string below
json = "{}"
# create an instance of InventorySourceFilter from a JSON string
inventory_source_filter_instance = InventorySourceFilter.from_json(json)
# print the JSON string representation of the object
print(InventorySourceFilter.to_json())

# convert the object into a dict
inventory_source_filter_dict = inventory_source_filter_instance.to_dict()
# create an instance of InventorySourceFilter from a dict
inventory_source_filter_from_dict = InventorySourceFilter.from_dict(inventory_source_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


