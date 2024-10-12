# PromotionsEntityType

Type of the promotion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**family** | [**PromotionsEntityTypeFamily**](PromotionsEntityTypeFamily.md) |  | 
**id** | **str** | String identifying the promotion type. | 
**label** | **str** | Label of the promotion type. This value is translated according to the &#39;Accept-Language&#39; header. | 

## Example

```python
from openapi_client.models.promotions_entity_type import PromotionsEntityType

# TODO update the JSON string below
json = "{}"
# create an instance of PromotionsEntityType from a JSON string
promotions_entity_type_instance = PromotionsEntityType.from_json(json)
# print the JSON string representation of the object
print(PromotionsEntityType.to_json())

# convert the object into a dict
promotions_entity_type_dict = promotions_entity_type_instance.to_dict()
# create an instance of PromotionsEntityType from a dict
promotions_entity_type_from_dict = PromotionsEntityType.from_dict(promotions_entity_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


