# MonetaryAmount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**price_amount** | [**Price**](Price.md) |  | [optional] 
**tax_amount** | [**Price**](Price.md) |  | [optional] 

## Example

```python
from openapi_client.models.monetary_amount import MonetaryAmount

# TODO update the JSON string below
json = "{}"
# create an instance of MonetaryAmount from a JSON string
monetary_amount_instance = MonetaryAmount.from_json(json)
# print the JSON string representation of the object
print(MonetaryAmount.to_json())

# convert the object into a dict
monetary_amount_dict = monetary_amount_instance.to_dict()
# create an instance of MonetaryAmount from a dict
monetary_amount_from_dict = MonetaryAmount.from_dict(monetary_amount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


