# UpdateAdsByInventoryReferenceResponse

A type that contains the response fields used by the <b>UpdateAdsByInventoryReference</b> method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ads** | [**List[AdReference]**](AdReference.md) | A list of ad IDs and links to retrieve them. | [optional] 
**errors** | [**List[Error]**](Error.md) | A container for all of the errors associated with the specified inventory reference ID. | [optional] 
**inventory_reference_id** | **str** | The reference ID associated with the ad. The reference ID could be a SKU number or Inventory Item Group, depending on value of &lt;code&gt;inventoryReferenceType&lt;/code&gt;. | [optional] 
**inventory_reference_type** | **str** | The inventory reference type associated with the ad. The inventory reference type could be a SKU number or Inventory Item Group. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**status_code** | **int** | An HTTP status code that indicates whether or not the CPS ad was successfully updated. | [optional] 

## Example

```python
from openapi_client.models.update_ads_by_inventory_reference_response import UpdateAdsByInventoryReferenceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateAdsByInventoryReferenceResponse from a JSON string
update_ads_by_inventory_reference_response_instance = UpdateAdsByInventoryReferenceResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateAdsByInventoryReferenceResponse.to_json())

# convert the object into a dict
update_ads_by_inventory_reference_response_dict = update_ads_by_inventory_reference_response_instance.to_dict()
# create an instance of UpdateAdsByInventoryReferenceResponse from a dict
update_ads_by_inventory_reference_response_from_dict = UpdateAdsByInventoryReferenceResponse.from_dict(update_ads_by_inventory_reference_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


