# AppPriceTierRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**price_points** | [**AppPriceTierRelationshipsPricePoints**](AppPriceTierRelationshipsPricePoints.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_price_tier_relationships import AppPriceTierRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of AppPriceTierRelationships from a JSON string
app_price_tier_relationships_instance = AppPriceTierRelationships.from_json(json)
# print the JSON string representation of the object
print(AppPriceTierRelationships.to_json())

# convert the object into a dict
app_price_tier_relationships_dict = app_price_tier_relationships_instance.to_dict()
# create an instance of AppPriceTierRelationships from a dict
app_price_tier_relationships_from_dict = AppPriceTierRelationships.from_dict(app_price_tier_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


