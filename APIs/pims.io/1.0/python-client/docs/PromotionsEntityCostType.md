# PromotionsEntityCostType

Type of the promotion cost.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | String identifying the type of the promotion cost. | 
**label** | **str** | Label of the type of the promotion cost. This value is translated according to the &#39;Accept-Language&#39; header. | 

## Example

```python
from openapi_client.models.promotions_entity_cost_type import PromotionsEntityCostType

# TODO update the JSON string below
json = "{}"
# create an instance of PromotionsEntityCostType from a JSON string
promotions_entity_cost_type_instance = PromotionsEntityCostType.from_json(json)
# print the JSON string representation of the object
print(PromotionsEntityCostType.to_json())

# convert the object into a dict
promotions_entity_cost_type_dict = promotions_entity_cost_type_instance.to_dict()
# create an instance of PromotionsEntityCostType from a dict
promotions_entity_cost_type_from_dict = PromotionsEntityCostType.from_dict(promotions_entity_cost_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


