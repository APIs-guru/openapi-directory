# PosSaleResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_language** | **str** | Required. The two-letter ISO 639-1 language code for the item. | [optional] 
**gtin** | **str** | Global Trade Item Number. | [optional] 
**item_id** | **str** | Required. A unique identifier for the item. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;content#posSaleResponse\&quot;. | [optional] 
**price** | [**Price**](Price.md) |  | [optional] 
**quantity** | **str** | Required. The relative change of the available quantity. Negative for items returned. | [optional] 
**sale_id** | **str** | A unique ID to group items from the same sale event. | [optional] 
**store_code** | **str** | Required. The identifier of the merchant&#39;s store. Either a &#x60;storeCode&#x60; inserted via the API or the code of the store in Google My Business. | [optional] 
**target_country** | **str** | Required. The CLDR territory code for the item. | [optional] 
**timestamp** | **str** | Required. The inventory timestamp, in ISO 8601 format. | [optional] 

## Example

```python
from openapi_client.models.pos_sale_response import PosSaleResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PosSaleResponse from a JSON string
pos_sale_response_instance = PosSaleResponse.from_json(json)
# print the JSON string representation of the object
print(PosSaleResponse.to_json())

# convert the object into a dict
pos_sale_response_dict = pos_sale_response_instance.to_dict()
# create an instance of PosSaleResponse from a dict
pos_sale_response_from_dict = PosSaleResponse.from_dict(pos_sale_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


