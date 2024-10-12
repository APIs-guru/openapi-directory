# PromotionsEntityAppliedToInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_id** | **int** | ID of the event the promotion applies to. This property is exclusive with &#39;series_id&#39;: if defined, then &#39;series_id&#39; will not be displayed. | [optional] 
**quantity** | **float** | Quantity share of the promotion devoted to this event/series. | [optional] 
**series_id** | **int** | ID of the series the promotion applies to. This property is exclusive with &#39;event_id&#39;: if defined, then &#39;event_id&#39; will not be displayed. | [optional] 
**unit_cost** | **float** | Unit cost share of the promotion devoted to this event/series. The total cost of the share can be calculated with: quantity × unit_cost. *This field may be omitted according to the customer configuration.* | [optional] 
**valorized_quantity** | **float** | Valorized quantity share of the promotion devoted to this event/series. *This field may be omitted according to the customer configuration.* | [optional] 
**valorized_unit_cost** | **float** | Valorized unit cost share of the promotion devoted to this event/series. The total valorized cost of the share can be calculated with: valorized_quantity × valorized_unit_cost. | [optional] 

## Example

```python
from openapi_client.models.promotions_entity_applied_to_inner import PromotionsEntityAppliedToInner

# TODO update the JSON string below
json = "{}"
# create an instance of PromotionsEntityAppliedToInner from a JSON string
promotions_entity_applied_to_inner_instance = PromotionsEntityAppliedToInner.from_json(json)
# print the JSON string representation of the object
print(PromotionsEntityAppliedToInner.to_json())

# convert the object into a dict
promotions_entity_applied_to_inner_dict = promotions_entity_applied_to_inner_instance.to_dict()
# create an instance of PromotionsEntityAppliedToInner from a dict
promotions_entity_applied_to_inner_from_dict = PromotionsEntityAppliedToInner.from_dict(promotions_entity_applied_to_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


