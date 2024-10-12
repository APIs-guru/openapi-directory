# VolumeSaleInfoOffersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**finsky_offer_type** | **int** | The finsky offer type (e.g., PURCHASE&#x3D;0 RENTAL&#x3D;3) | [optional] 
**giftable** | **bool** | Indicates whether the offer is giftable. | [optional] 
**list_price** | [**VolumeSaleInfoOffersInnerListPrice**](VolumeSaleInfoOffersInnerListPrice.md) |  | [optional] 
**rental_duration** | [**VolumeSaleInfoOffersInnerRentalDuration**](VolumeSaleInfoOffersInnerRentalDuration.md) |  | [optional] 
**retail_price** | [**VolumeSaleInfoOffersInnerRetailPrice**](VolumeSaleInfoOffersInnerRetailPrice.md) |  | [optional] 

## Example

```python
from openapi_client.models.volume_sale_info_offers_inner import VolumeSaleInfoOffersInner

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeSaleInfoOffersInner from a JSON string
volume_sale_info_offers_inner_instance = VolumeSaleInfoOffersInner.from_json(json)
# print the JSON string representation of the object
print(VolumeSaleInfoOffersInner.to_json())

# convert the object into a dict
volume_sale_info_offers_inner_dict = volume_sale_info_offers_inner_instance.to_dict()
# create an instance of VolumeSaleInfoOffersInner from a dict
volume_sale_info_offers_inner_from_dict = VolumeSaleInfoOffersInner.from_dict(volume_sale_info_offers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


