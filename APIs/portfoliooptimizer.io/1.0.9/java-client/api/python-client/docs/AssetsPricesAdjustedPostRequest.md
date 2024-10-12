# AssetsPricesAdjustedPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**List[AssetsPricesAdjustedPostRequestAssetsInner]**](AssetsPricesAdjustedPostRequestAssetsInner.md) |  | 

## Example

```python
from openapi_client.models.assets_prices_adjusted_post_request import AssetsPricesAdjustedPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssetsPricesAdjustedPostRequest from a JSON string
assets_prices_adjusted_post_request_instance = AssetsPricesAdjustedPostRequest.from_json(json)
# print the JSON string representation of the object
print(AssetsPricesAdjustedPostRequest.to_json())

# convert the object into a dict
assets_prices_adjusted_post_request_dict = assets_prices_adjusted_post_request_instance.to_dict()
# create an instance of AssetsPricesAdjustedPostRequest from a dict
assets_prices_adjusted_post_request_from_dict = AssetsPricesAdjustedPostRequest.from_dict(assets_prices_adjusted_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


