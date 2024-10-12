# AppPriceTierResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppPriceTier**](AppPriceTier.md) |  | 
**included** | [**List[AppPricePoint]**](AppPricePoint.md) |  | [optional] 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.app_price_tier_response import AppPriceTierResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppPriceTierResponse from a JSON string
app_price_tier_response_instance = AppPriceTierResponse.from_json(json)
# print the JSON string representation of the object
print(AppPriceTierResponse.to_json())

# convert the object into a dict
app_price_tier_response_dict = app_price_tier_response_instance.to_dict()
# create an instance of AppPriceTierResponse from a dict
app_price_tier_response_from_dict = AppPriceTierResponse.from_dict(app_price_tier_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


