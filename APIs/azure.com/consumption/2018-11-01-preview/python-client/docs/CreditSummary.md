# CreditSummary

A credit summary resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CreditSummaryProperties**](CreditSummaryProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.credit_summary import CreditSummary

# TODO update the JSON string below
json = "{}"
# create an instance of CreditSummary from a JSON string
credit_summary_instance = CreditSummary.from_json(json)
# print the JSON string representation of the object
print(CreditSummary.to_json())

# convert the object into a dict
credit_summary_dict = credit_summary_instance.to_dict()
# create an instance of CreditSummary from a dict
credit_summary_from_dict = CreditSummary.from_dict(credit_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


