# VolumeSaleInfoOffersInnerRetailPrice

Offer retail (=discounted) price in Micros

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_in_micros** | **float** |  | [optional] 
**currency_code** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.volume_sale_info_offers_inner_retail_price import VolumeSaleInfoOffersInnerRetailPrice

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeSaleInfoOffersInnerRetailPrice from a JSON string
volume_sale_info_offers_inner_retail_price_instance = VolumeSaleInfoOffersInnerRetailPrice.from_json(json)
# print the JSON string representation of the object
print(VolumeSaleInfoOffersInnerRetailPrice.to_json())

# convert the object into a dict
volume_sale_info_offers_inner_retail_price_dict = volume_sale_info_offers_inner_retail_price_instance.to_dict()
# create an instance of VolumeSaleInfoOffersInnerRetailPrice from a dict
volume_sale_info_offers_inner_retail_price_from_dict = VolumeSaleInfoOffersInnerRetailPrice.from_dict(volume_sale_info_offers_inner_retail_price_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


