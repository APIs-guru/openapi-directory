# VolumeSaleInfoListPrice

Suggested retail price. (In LITE projection.)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Amount in the currency listed below. (In LITE projection.) | [optional] 
**currency_code** | **str** | An ISO 4217, three-letter currency code. (In LITE projection.) | [optional] 

## Example

```python
from openapi_client.models.volume_sale_info_list_price import VolumeSaleInfoListPrice

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeSaleInfoListPrice from a JSON string
volume_sale_info_list_price_instance = VolumeSaleInfoListPrice.from_json(json)
# print the JSON string representation of the object
print(VolumeSaleInfoListPrice.to_json())

# convert the object into a dict
volume_sale_info_list_price_dict = volume_sale_info_list_price_instance.to_dict()
# create an instance of VolumeSaleInfoListPrice from a dict
volume_sale_info_list_price_from_dict = VolumeSaleInfoListPrice.from_dict(volume_sale_info_list_price_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


