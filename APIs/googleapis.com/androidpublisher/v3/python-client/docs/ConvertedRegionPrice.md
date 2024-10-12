# ConvertedRegionPrice

A converted region price.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**price** | [**Money**](Money.md) |  | [optional] 
**region_code** | **str** | The region code of the region. | [optional] 
**tax_amount** | [**Money**](Money.md) |  | [optional] 

## Example

```python
from openapi_client.models.converted_region_price import ConvertedRegionPrice

# TODO update the JSON string below
json = "{}"
# create an instance of ConvertedRegionPrice from a JSON string
converted_region_price_instance = ConvertedRegionPrice.from_json(json)
# print the JSON string representation of the object
print(ConvertedRegionPrice.to_json())

# convert the object into a dict
converted_region_price_dict = converted_region_price_instance.to_dict()
# create an instance of ConvertedRegionPrice from a dict
converted_region_price_from_dict = ConvertedRegionPrice.from_dict(converted_region_price_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


