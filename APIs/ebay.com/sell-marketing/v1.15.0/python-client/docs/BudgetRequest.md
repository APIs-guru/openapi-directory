# BudgetRequest

A container for the budget details of a Promoted Listings campaign that uses the Cost Per Click (CPC) funding model.<br /><br /><span class=\"tablenote\"><b>Note:</b> This container will only be returned for campaigns using the CPC funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span>

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**Amount**](Amount.md) |  | [optional] 

## Example

```python
from openapi_client.models.budget_request import BudgetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BudgetRequest from a JSON string
budget_request_instance = BudgetRequest.from_json(json)
# print the JSON string representation of the object
print(BudgetRequest.to_json())

# convert the object into a dict
budget_request_dict = budget_request_instance.to_dict()
# create an instance of BudgetRequest from a dict
budget_request_from_dict = BudgetRequest.from_dict(budget_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


