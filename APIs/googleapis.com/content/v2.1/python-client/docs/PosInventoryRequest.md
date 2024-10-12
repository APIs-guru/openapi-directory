# PosInventoryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_language** | **str** | Required. The two-letter ISO 639-1 language code for the item. | [optional] 
**gtin** | **str** | Global Trade Item Number. | [optional] 
**item_id** | **str** | Required. A unique identifier for the item. | [optional] 
**pickup_method** | **str** | Optional. Supported pickup method for this offer. Unless the value is \&quot;not supported\&quot;, this field must be submitted together with &#x60;pickupSla&#x60;. For accepted attribute values, see the [local product inventory feed specification](https://support.google.com/merchants/answer/3061342). | [optional] 
**pickup_sla** | **str** | Optional. Expected date that an order will be ready for pickup relative to the order date. Must be submitted together with &#x60;pickupMethod&#x60;. For accepted attribute values, see the [local product inventory feed specification](https://support.google.com/merchants/answer/3061342). | [optional] 
**price** | [**Price**](Price.md) |  | [optional] 
**quantity** | **str** | Required. The available quantity of the item. | [optional] 
**store_code** | **str** | Required. The identifier of the merchant&#39;s store. Either a &#x60;storeCode&#x60; inserted through the API or the code of the store in a Business Profile. | [optional] 
**target_country** | **str** | Required. The CLDR territory code for the item. | [optional] 
**timestamp** | **str** | Required. The inventory timestamp, in ISO 8601 format. | [optional] 

## Example

```python
from openapi_client.models.pos_inventory_request import PosInventoryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PosInventoryRequest from a JSON string
pos_inventory_request_instance = PosInventoryRequest.from_json(json)
# print the JSON string representation of the object
print(PosInventoryRequest.to_json())

# convert the object into a dict
pos_inventory_request_dict = pos_inventory_request_instance.to_dict()
# create an instance of PosInventoryRequest from a dict
pos_inventory_request_from_dict = PosInventoryRequest.from_dict(pos_inventory_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


