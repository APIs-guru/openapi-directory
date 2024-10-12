# AppPriceTierRelationshipsPricePoints


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppPriceTierRelationshipsPricePointsDataInner]**](AppPriceTierRelationshipsPricePointsDataInner.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_price_tier_relationships_price_points import AppPriceTierRelationshipsPricePoints

# TODO update the JSON string below
json = "{}"
# create an instance of AppPriceTierRelationshipsPricePoints from a JSON string
app_price_tier_relationships_price_points_instance = AppPriceTierRelationshipsPricePoints.from_json(json)
# print the JSON string representation of the object
print(AppPriceTierRelationshipsPricePoints.to_json())

# convert the object into a dict
app_price_tier_relationships_price_points_dict = app_price_tier_relationships_price_points_instance.to_dict()
# create an instance of AppPriceTierRelationshipsPricePoints from a dict
app_price_tier_relationships_price_points_from_dict = AppPriceTierRelationshipsPricePoints.from_dict(app_price_tier_relationships_price_points_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


