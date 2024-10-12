# AvailableBalanceProperties

The properties of available balance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**Amount**](Amount.md) |  | [optional] 

## Example

```python
from openapi_client.models.available_balance_properties import AvailableBalanceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableBalanceProperties from a JSON string
available_balance_properties_instance = AvailableBalanceProperties.from_json(json)
# print the JSON string representation of the object
print(AvailableBalanceProperties.to_json())

# convert the object into a dict
available_balance_properties_dict = available_balance_properties_instance.to_dict()
# create an instance of AvailableBalanceProperties from a dict
available_balance_properties_from_dict = AvailableBalanceProperties.from_dict(available_balance_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


