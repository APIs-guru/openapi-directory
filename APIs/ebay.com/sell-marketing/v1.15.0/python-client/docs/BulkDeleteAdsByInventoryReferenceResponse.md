# BulkDeleteAdsByInventoryReferenceResponse

This type defines a container that lists the ads that <b>bulkDeleteAdsByInventoryReference</b> deleted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responses** | [**List[DeleteAdsByInventoryReferenceResponse]**](DeleteAdsByInventoryReferenceResponse.md) | An array of the ads that were deleted by the &lt;b&gt;bulkDeleteAdsByInventoryReference&lt;/b&gt; request, including information associated with each individual delete request. | [optional] 

## Example

```python
from openapi_client.models.bulk_delete_ads_by_inventory_reference_response import BulkDeleteAdsByInventoryReferenceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkDeleteAdsByInventoryReferenceResponse from a JSON string
bulk_delete_ads_by_inventory_reference_response_instance = BulkDeleteAdsByInventoryReferenceResponse.from_json(json)
# print the JSON string representation of the object
print(BulkDeleteAdsByInventoryReferenceResponse.to_json())

# convert the object into a dict
bulk_delete_ads_by_inventory_reference_response_dict = bulk_delete_ads_by_inventory_reference_response_instance.to_dict()
# create an instance of BulkDeleteAdsByInventoryReferenceResponse from a dict
bulk_delete_ads_by_inventory_reference_response_from_dict = BulkDeleteAdsByInventoryReferenceResponse.from_dict(bulk_delete_ads_by_inventory_reference_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


