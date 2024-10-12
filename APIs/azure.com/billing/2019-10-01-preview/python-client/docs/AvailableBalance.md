# AvailableBalance

Latest available balance on Monetary Credit PI.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AvailableBalanceProperties**](AvailableBalanceProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.available_balance import AvailableBalance

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableBalance from a JSON string
available_balance_instance = AvailableBalance.from_json(json)
# print the JSON string representation of the object
print(AvailableBalance.to_json())

# convert the object into a dict
available_balance_dict = available_balance_instance.to_dict()
# create an instance of AvailableBalance from a dict
available_balance_from_dict = AvailableBalance.from_dict(available_balance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


