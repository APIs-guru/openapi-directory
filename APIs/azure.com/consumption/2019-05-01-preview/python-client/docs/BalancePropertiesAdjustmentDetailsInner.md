# BalancePropertiesAdjustmentDetailsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | the name of new adjustment. | [optional] [readonly] 
**value** | **float** | the value of new adjustment. | [optional] [readonly] 

## Example

```python
from openapi_client.models.balance_properties_adjustment_details_inner import BalancePropertiesAdjustmentDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of BalancePropertiesAdjustmentDetailsInner from a JSON string
balance_properties_adjustment_details_inner_instance = BalancePropertiesAdjustmentDetailsInner.from_json(json)
# print the JSON string representation of the object
print(BalancePropertiesAdjustmentDetailsInner.to_json())

# convert the object into a dict
balance_properties_adjustment_details_inner_dict = balance_properties_adjustment_details_inner_instance.to_dict()
# create an instance of BalancePropertiesAdjustmentDetailsInner from a dict
balance_properties_adjustment_details_inner_from_dict = BalancePropertiesAdjustmentDetailsInner.from_dict(balance_properties_adjustment_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


