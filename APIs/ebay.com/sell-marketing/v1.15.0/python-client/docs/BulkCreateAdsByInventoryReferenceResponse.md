# BulkCreateAdsByInventoryReferenceResponse

This type defines the response fields used by the <b>bulkCreateAdsByInventoryReference</b> method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responses** | [**List[CreateAdsByInventoryReferenceResponse]**](CreateAdsByInventoryReferenceResponse.md) | This array displays the list of ads that were successfully created. For any ads that were not created successfully, the errors array may provide more detail about why creation of one or more ads failed. | [optional] 

## Example

```python
from openapi_client.models.bulk_create_ads_by_inventory_reference_response import BulkCreateAdsByInventoryReferenceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkCreateAdsByInventoryReferenceResponse from a JSON string
bulk_create_ads_by_inventory_reference_response_instance = BulkCreateAdsByInventoryReferenceResponse.from_json(json)
# print the JSON string representation of the object
print(BulkCreateAdsByInventoryReferenceResponse.to_json())

# convert the object into a dict
bulk_create_ads_by_inventory_reference_response_dict = bulk_create_ads_by_inventory_reference_response_instance.to_dict()
# create an instance of BulkCreateAdsByInventoryReferenceResponse from a dict
bulk_create_ads_by_inventory_reference_response_from_dict = BulkCreateAdsByInventoryReferenceResponse.from_dict(bulk_create_ads_by_inventory_reference_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


