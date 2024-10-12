# AppPriceRelationshipsPriceTier


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppPriceRelationshipsPriceTierData**](AppPriceRelationshipsPriceTierData.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_price_relationships_price_tier import AppPriceRelationshipsPriceTier

# TODO update the JSON string below
json = "{}"
# create an instance of AppPriceRelationshipsPriceTier from a JSON string
app_price_relationships_price_tier_instance = AppPriceRelationshipsPriceTier.from_json(json)
# print the JSON string representation of the object
print(AppPriceRelationshipsPriceTier.to_json())

# convert the object into a dict
app_price_relationships_price_tier_dict = app_price_relationships_price_tier_instance.to_dict()
# create an instance of AppPriceRelationshipsPriceTier from a dict
app_price_relationships_price_tier_from_dict = AppPriceRelationshipsPriceTier.from_dict(app_price_relationships_price_tier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


