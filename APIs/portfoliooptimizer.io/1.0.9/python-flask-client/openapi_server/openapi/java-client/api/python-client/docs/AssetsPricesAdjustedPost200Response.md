# AssetsPricesAdjustedPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**List[AssetsPricesAdjustedPost200ResponseAssetsInner]**](AssetsPricesAdjustedPost200ResponseAssetsInner.md) |  | 

## Example

```python
from openapi_client.models.assets_prices_adjusted_post200_response import AssetsPricesAdjustedPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsPricesAdjustedPost200Response from a JSON string
assets_prices_adjusted_post200_response_instance = AssetsPricesAdjustedPost200Response.from_json(json)
# print the JSON string representation of the object
print(AssetsPricesAdjustedPost200Response.to_json())

# convert the object into a dict
assets_prices_adjusted_post200_response_dict = assets_prices_adjusted_post200_response_instance.to_dict()
# create an instance of AssetsPricesAdjustedPost200Response from a dict
assets_prices_adjusted_post200_response_from_dict = AssetsPricesAdjustedPost200Response.from_dict(assets_prices_adjusted_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


