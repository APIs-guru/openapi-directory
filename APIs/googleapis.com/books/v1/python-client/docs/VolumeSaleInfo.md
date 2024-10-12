# VolumeSaleInfo

Any information about a volume related to the eBookstore and/or purchaseability. This information can depend on the country where the request originates from (i.e. books may not be for sale in certain countries).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buy_link** | **str** | URL to purchase this volume on the Google Books site. (In LITE projection) | [optional] 
**country** | **str** | The two-letter ISO_3166-1 country code for which this sale information is valid. (In LITE projection.) | [optional] 
**is_ebook** | **bool** | Whether or not this volume is an eBook (can be added to the My eBooks shelf). | [optional] 
**list_price** | [**VolumeSaleInfoListPrice**](VolumeSaleInfoListPrice.md) |  | [optional] 
**offers** | [**List[VolumeSaleInfoOffersInner]**](VolumeSaleInfoOffersInner.md) | Offers available for this volume (sales and rentals). | [optional] 
**on_sale_date** | **str** | The date on which this book is available for sale. | [optional] 
**retail_price** | [**VolumeSaleInfoRetailPrice**](VolumeSaleInfoRetailPrice.md) |  | [optional] 
**saleability** | **str** | Whether or not this book is available for sale or offered for free in the Google eBookstore for the country listed above. Possible values are FOR_SALE, FOR_RENTAL_ONLY, FOR_SALE_AND_RENTAL, FREE, NOT_FOR_SALE, or FOR_PREORDER. | [optional] 

## Example

```python
from openapi_client.models.volume_sale_info import VolumeSaleInfo

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeSaleInfo from a JSON string
volume_sale_info_instance = VolumeSaleInfo.from_json(json)
# print the JSON string representation of the object
print(VolumeSaleInfo.to_json())

# convert the object into a dict
volume_sale_info_dict = volume_sale_info_instance.to_dict()
# create an instance of VolumeSaleInfo from a dict
volume_sale_info_from_dict = VolumeSaleInfo.from_dict(volume_sale_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


