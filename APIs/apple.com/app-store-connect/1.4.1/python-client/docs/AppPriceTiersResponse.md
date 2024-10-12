# AppPriceTiersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppPriceTier]**](AppPriceTier.md) |  | 
**included** | [**List[AppPricePoint]**](AppPricePoint.md) |  | [optional] 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_price_tiers_response import AppPriceTiersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppPriceTiersResponse from a JSON string
app_price_tiers_response_instance = AppPriceTiersResponse.from_json(json)
# print the JSON string representation of the object
print(AppPriceTiersResponse.to_json())

# convert the object into a dict
app_price_tiers_response_dict = app_price_tiers_response_instance.to_dict()
# create an instance of AppPriceTiersResponse from a dict
app_price_tiers_response_from_dict = AppPriceTiersResponse.from_dict(app_price_tiers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


