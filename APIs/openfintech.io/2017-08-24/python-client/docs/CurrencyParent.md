# CurrencyParent

Parent currency. 'Only for virtual currency' 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CurrencyParentData**](CurrencyParentData.md) |  | [optional] 
**links** | [**CurrencyParentLinks**](CurrencyParentLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.currency_parent import CurrencyParent

# TODO update the JSON string below
json = "{}"
# create an instance of CurrencyParent from a JSON string
currency_parent_instance = CurrencyParent.from_json(json)
# print the JSON string representation of the object
print(CurrencyParent.to_json())

# convert the object into a dict
currency_parent_dict = currency_parent_instance.to_dict()
# create an instance of CurrencyParent from a dict
currency_parent_from_dict = CurrencyParent.from_dict(currency_parent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


