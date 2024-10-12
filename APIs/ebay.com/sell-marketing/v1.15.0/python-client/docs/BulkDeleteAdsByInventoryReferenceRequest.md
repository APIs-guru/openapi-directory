# BulkDeleteAdsByInventoryReferenceRequest

This type defines the request fields that <b>bulkDeleteAdsByInventoryReference</b> uses to delete ads in bulk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[DeleteAdsByInventoryReferenceRequest]**](DeleteAdsByInventoryReferenceRequest.md) | A list of inventory referenceID and inventory reference type pairs that specify the set of ads to remove in bulk. | [optional] 

## Example

```python
from openapi_client.models.bulk_delete_ads_by_inventory_reference_request import BulkDeleteAdsByInventoryReferenceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkDeleteAdsByInventoryReferenceRequest from a JSON string
bulk_delete_ads_by_inventory_reference_request_instance = BulkDeleteAdsByInventoryReferenceRequest.from_json(json)
# print the JSON string representation of the object
print(BulkDeleteAdsByInventoryReferenceRequest.to_json())

# convert the object into a dict
bulk_delete_ads_by_inventory_reference_request_dict = bulk_delete_ads_by_inventory_reference_request_instance.to_dict()
# create an instance of BulkDeleteAdsByInventoryReferenceRequest from a dict
bulk_delete_ads_by_inventory_reference_request_from_dict = BulkDeleteAdsByInventoryReferenceRequest.from_dict(bulk_delete_ads_by_inventory_reference_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


