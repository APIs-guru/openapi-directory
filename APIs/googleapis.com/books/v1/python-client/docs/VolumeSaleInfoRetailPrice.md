# VolumeSaleInfoRetailPrice

The actual selling price of the book. This is the same as the suggested retail or list price unless there are offers or discounts on this volume. (In LITE projection.)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Amount in the currency listed below. (In LITE projection.) | [optional] 
**currency_code** | **str** | An ISO 4217, three-letter currency code. (In LITE projection.) | [optional] 

## Example

```python
from openapi_client.models.volume_sale_info_retail_price import VolumeSaleInfoRetailPrice

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeSaleInfoRetailPrice from a JSON string
volume_sale_info_retail_price_instance = VolumeSaleInfoRetailPrice.from_json(json)
# print the JSON string representation of the object
print(VolumeSaleInfoRetailPrice.to_json())

# convert the object into a dict
volume_sale_info_retail_price_dict = volume_sale_info_retail_price_instance.to_dict()
# create an instance of VolumeSaleInfoRetailPrice from a dict
volume_sale_info_retail_price_from_dict = VolumeSaleInfoRetailPrice.from_dict(volume_sale_info_retail_price_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


