# PromotionsEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied_to** | [**List[PromotionsEntityAppliedToInner]**](PromotionsEntityAppliedToInner.md) | List of events and/or series where the promotion is applied. A promotion can be applied on several events, and its costs can be split between those events. | 
**comments** | **str** | Comments on the promotion. | 
**cost** | [**PromotionsEntityCost**](PromotionsEntityCost.md) |  | 
**end_date** | **date** | Date the promotion ends. (If null, has the same value as start_date.) | 
**file** | **str** | File associated to the promotion. | [optional] 
**id** | **int** | Unique ID of the promotion. | 
**label** | **str** | Label of the promotion. | 
**start_date** | **date** | Date the promotion begins. | 
**supplier** | [**PromotionsEntitySupplier**](PromotionsEntitySupplier.md) |  | 
**type** | [**PromotionsEntityType**](PromotionsEntityType.md) |  | 

## Example

```python
from openapi_client.models.promotions_entity import PromotionsEntity

# TODO update the JSON string below
json = "{}"
# create an instance of PromotionsEntity from a JSON string
promotions_entity_instance = PromotionsEntity.from_json(json)
# print the JSON string representation of the object
print(PromotionsEntity.to_json())

# convert the object into a dict
promotions_entity_dict = promotions_entity_instance.to_dict()
# create an instance of PromotionsEntity from a dict
promotions_entity_from_dict = PromotionsEntity.from_dict(promotions_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


