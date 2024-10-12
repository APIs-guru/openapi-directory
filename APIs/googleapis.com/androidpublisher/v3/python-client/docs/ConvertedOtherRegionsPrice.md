# ConvertedOtherRegionsPrice

Converted other regions prices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eur_price** | [**Money**](Money.md) |  | [optional] 
**usd_price** | [**Money**](Money.md) |  | [optional] 

## Example

```python
from openapi_client.models.converted_other_regions_price import ConvertedOtherRegionsPrice

# TODO update the JSON string below
json = "{}"
# create an instance of ConvertedOtherRegionsPrice from a JSON string
converted_other_regions_price_instance = ConvertedOtherRegionsPrice.from_json(json)
# print the JSON string representation of the object
print(ConvertedOtherRegionsPrice.to_json())

# convert the object into a dict
converted_other_regions_price_dict = converted_other_regions_price_instance.to_dict()
# create an instance of ConvertedOtherRegionsPrice from a dict
converted_other_regions_price_from_dict = ConvertedOtherRegionsPrice.from_dict(converted_other_regions_price_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


