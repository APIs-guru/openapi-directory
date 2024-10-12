# ConvertRegionPricesResponse

Response message for ConvertRegionPrices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**converted_other_regions_price** | [**ConvertedOtherRegionsPrice**](ConvertedOtherRegionsPrice.md) |  | [optional] 
**converted_region_prices** | [**Dict[str, ConvertedRegionPrice]**](ConvertedRegionPrice.md) | Map from region code to converted region price. | [optional] 

## Example

```python
from openapi_client.models.convert_region_prices_response import ConvertRegionPricesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ConvertRegionPricesResponse from a JSON string
convert_region_prices_response_instance = ConvertRegionPricesResponse.from_json(json)
# print the JSON string representation of the object
print(ConvertRegionPricesResponse.to_json())

# convert the object into a dict
convert_region_prices_response_dict = convert_region_prices_response_instance.to_dict()
# create an instance of ConvertRegionPricesResponse from a dict
convert_region_prices_response_from_dict = ConvertRegionPricesResponse.from_dict(convert_region_prices_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


