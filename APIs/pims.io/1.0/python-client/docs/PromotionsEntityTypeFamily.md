# PromotionsEntityTypeFamily

Family the promotion type belongs to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | String identifying the promotion family. | 
**label** | **str** | Label of the promotion family. This value is translated according to the &#39;Accept-Language&#39; header. | 

## Example

```python
from openapi_client.models.promotions_entity_type_family import PromotionsEntityTypeFamily

# TODO update the JSON string below
json = "{}"
# create an instance of PromotionsEntityTypeFamily from a JSON string
promotions_entity_type_family_instance = PromotionsEntityTypeFamily.from_json(json)
# print the JSON string representation of the object
print(PromotionsEntityTypeFamily.to_json())

# convert the object into a dict
promotions_entity_type_family_dict = promotions_entity_type_family_instance.to_dict()
# create an instance of PromotionsEntityTypeFamily from a dict
promotions_entity_type_family_from_dict = PromotionsEntityTypeFamily.from_dict(promotions_entity_type_family_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


