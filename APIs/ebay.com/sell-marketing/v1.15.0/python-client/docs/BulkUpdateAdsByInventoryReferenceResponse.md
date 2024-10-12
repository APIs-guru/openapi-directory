# BulkUpdateAdsByInventoryReferenceResponse

A type that defines the fields for the <b>BulkUpdateAdStatusByInventoryReference</b> response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responses** | [**List[UpdateAdsByInventoryReferenceResponse]**](UpdateAdsByInventoryReferenceResponse.md) | A list of inventory references that were processed from the request. | [optional] 

## Example

```python
from openapi_client.models.bulk_update_ads_by_inventory_reference_response import BulkUpdateAdsByInventoryReferenceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkUpdateAdsByInventoryReferenceResponse from a JSON string
bulk_update_ads_by_inventory_reference_response_instance = BulkUpdateAdsByInventoryReferenceResponse.from_json(json)
# print the JSON string representation of the object
print(BulkUpdateAdsByInventoryReferenceResponse.to_json())

# convert the object into a dict
bulk_update_ads_by_inventory_reference_response_dict = bulk_update_ads_by_inventory_reference_response_instance.to_dict()
# create an instance of BulkUpdateAdsByInventoryReferenceResponse from a dict
bulk_update_ads_by_inventory_reference_response_from_dict = BulkUpdateAdsByInventoryReferenceResponse.from_dict(bulk_update_ads_by_inventory_reference_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


