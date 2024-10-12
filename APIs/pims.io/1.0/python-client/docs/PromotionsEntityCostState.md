# PromotionsEntityCostState

State of the promotion cost. *This object may be omitted according to the customer configuration.*

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | String identifying the state of the promotion cost. | 
**label** | **str** | Label of the state of the promotion cost. This value is translated according to the &#39;Accept-Language&#39; header. | 

## Example

```python
from openapi_client.models.promotions_entity_cost_state import PromotionsEntityCostState

# TODO update the JSON string below
json = "{}"
# create an instance of PromotionsEntityCostState from a JSON string
promotions_entity_cost_state_instance = PromotionsEntityCostState.from_json(json)
# print the JSON string representation of the object
print(PromotionsEntityCostState.to_json())

# convert the object into a dict
promotions_entity_cost_state_dict = promotions_entity_cost_state_instance.to_dict()
# create an instance of PromotionsEntityCostState from a dict
promotions_entity_cost_state_from_dict = PromotionsEntityCostState.from_dict(promotions_entity_cost_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


