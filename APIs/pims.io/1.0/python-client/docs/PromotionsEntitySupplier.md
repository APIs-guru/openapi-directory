# PromotionsEntitySupplier

Supplier of the promotion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Unique ID of the supplier. | 
**label** | **str** | Name of the supplier. | 

## Example

```python
from openapi_client.models.promotions_entity_supplier import PromotionsEntitySupplier

# TODO update the JSON string below
json = "{}"
# create an instance of PromotionsEntitySupplier from a JSON string
promotions_entity_supplier_instance = PromotionsEntitySupplier.from_json(json)
# print the JSON string representation of the object
print(PromotionsEntitySupplier.to_json())

# convert the object into a dict
promotions_entity_supplier_dict = promotions_entity_supplier_instance.to_dict()
# create an instance of PromotionsEntitySupplier from a dict
promotions_entity_supplier_from_dict = PromotionsEntitySupplier.from_dict(promotions_entity_supplier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


