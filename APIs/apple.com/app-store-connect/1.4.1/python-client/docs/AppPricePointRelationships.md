# AppPricePointRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**price_tier** | [**AppPriceRelationshipsPriceTier**](AppPriceRelationshipsPriceTier.md) |  | [optional] 
**territory** | [**AppPricePointRelationshipsTerritory**](AppPricePointRelationshipsTerritory.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_price_point_relationships import AppPricePointRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of AppPricePointRelationships from a JSON string
app_price_point_relationships_instance = AppPricePointRelationships.from_json(json)
# print the JSON string representation of the object
print(AppPricePointRelationships.to_json())

# convert the object into a dict
app_price_point_relationships_dict = app_price_point_relationships_instance.to_dict()
# create an instance of AppPricePointRelationships from a dict
app_price_point_relationships_from_dict = AppPricePointRelationships.from_dict(app_price_point_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


