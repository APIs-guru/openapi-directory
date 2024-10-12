# CreditEstimate

An estimated credit applied to the costs on a SKU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_amount** | [**Money**](Money.md) |  | [optional] 
**credit_description** | **str** | The credit description. | [optional] 
**credit_type** | **str** | The credit type. | [optional] 

## Example

```python
from openapi_client.models.credit_estimate import CreditEstimate

# TODO update the JSON string below
json = "{}"
# create an instance of CreditEstimate from a JSON string
credit_estimate_instance = CreditEstimate.from_json(json)
# print the JSON string representation of the object
print(CreditEstimate.to_json())

# convert the object into a dict
credit_estimate_dict = credit_estimate_instance.to_dict()
# create an instance of CreditEstimate from a dict
credit_estimate_from_dict = CreditEstimate.from_dict(credit_estimate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


