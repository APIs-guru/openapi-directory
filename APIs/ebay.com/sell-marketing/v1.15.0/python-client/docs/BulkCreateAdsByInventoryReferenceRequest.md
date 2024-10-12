# BulkCreateAdsByInventoryReferenceRequest

This type defines the fields used to create ads in bulk by inventory reference IDs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[CreateAdsByInventoryReferenceRequest]**](CreateAdsByInventoryReferenceRequest.md) | A list of inventory reference ID and inventory reference type pairs, and the bid percentage, which the call uses to create ads in bulk. | [optional] 

## Example

```python
from openapi_client.models.bulk_create_ads_by_inventory_reference_request import BulkCreateAdsByInventoryReferenceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkCreateAdsByInventoryReferenceRequest from a JSON string
bulk_create_ads_by_inventory_reference_request_instance = BulkCreateAdsByInventoryReferenceRequest.from_json(json)
# print the JSON string representation of the object
print(BulkCreateAdsByInventoryReferenceRequest.to_json())

# convert the object into a dict
bulk_create_ads_by_inventory_reference_request_dict = bulk_create_ads_by_inventory_reference_request_instance.to_dict()
# create an instance of BulkCreateAdsByInventoryReferenceRequest from a dict
bulk_create_ads_by_inventory_reference_request_from_dict = BulkCreateAdsByInventoryReferenceRequest.from_dict(bulk_create_ads_by_inventory_reference_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


