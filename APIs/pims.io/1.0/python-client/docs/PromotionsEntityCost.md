# PromotionsEntityCost

Cost of the promotion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | Currency of the unit_cost (&lt;a href&#x3D;&#39;https://en.wikipedia.org/wiki/ISO_4217#Active_codes&#39;&gt;ISO 4212 alphabetic code&lt;/a&gt;). | [optional] 
**exchange** | **str** | What was offered in exchange of the promotion. | [optional] 
**quantity** | **float** | Quantity of the promotion (see unit_cost). | [optional] 
**state** | [**PromotionsEntityCostState**](PromotionsEntityCostState.md) |  | [optional] 
**type** | [**PromotionsEntityCostType**](PromotionsEntityCostType.md) |  | 
**unit_cost** | **float** | Unit cost of the promotion. The total cost of the promotion can be calculated with: quantity × unit_cost. | [optional] 
**valorized_quantity** | **float** | Valorized quantity of the promotion (see valorized_unit_cost). *This field may be omitted according to the customer configuration.* | [optional] 
**valorized_unit_cost** | **float** | Valorized unit cost of the promotion. The total valorized cost of the promotion can be calculated with: valorized_quantity × valorized_unit_cost. *This field may be omitted according to the customer configuration.* | [optional] 

## Example

```python
from openapi_client.models.promotions_entity_cost import PromotionsEntityCost

# TODO update the JSON string below
json = "{}"
# create an instance of PromotionsEntityCost from a JSON string
promotions_entity_cost_instance = PromotionsEntityCost.from_json(json)
# print the JSON string representation of the object
print(PromotionsEntityCost.to_json())

# convert the object into a dict
promotions_entity_cost_dict = promotions_entity_cost_instance.to_dict()
# create an instance of PromotionsEntityCost from a dict
promotions_entity_cost_from_dict = PromotionsEntityCost.from_dict(promotions_entity_cost_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


