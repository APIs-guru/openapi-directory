# BalancePropertiesNewPurchasesDetailsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | the name of new purchase. | [optional] [readonly] 
**value** | **float** | the value of new purchase. | [optional] [readonly] 

## Example

```python
from openapi_client.models.balance_properties_new_purchases_details_inner import BalancePropertiesNewPurchasesDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of BalancePropertiesNewPurchasesDetailsInner from a JSON string
balance_properties_new_purchases_details_inner_instance = BalancePropertiesNewPurchasesDetailsInner.from_json(json)
# print the JSON string representation of the object
print(BalancePropertiesNewPurchasesDetailsInner.to_json())

# convert the object into a dict
balance_properties_new_purchases_details_inner_dict = balance_properties_new_purchases_details_inner_instance.to_dict()
# create an instance of BalancePropertiesNewPurchasesDetailsInner from a dict
balance_properties_new_purchases_details_inner_from_dict = BalancePropertiesNewPurchasesDetailsInner.from_dict(balance_properties_new_purchases_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


