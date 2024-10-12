# Budget

A container for the budget details of a Promoted Listings campaign that uses the Cost Per Click (CPC) funding model.<br /><br /><span class=\"tablenote\"><b>Note:</b> This container will only be returned for campaigns using the CPC funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span>

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**Amount**](Amount.md) |  | [optional] 
**budget_status** | **str** | The budget status for a CPC Promoted Listings campaign. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/pls:BudgetStatusEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.budget import Budget

# TODO update the JSON string below
json = "{}"
# create an instance of Budget from a JSON string
budget_instance = Budget.from_json(json)
# print the JSON string representation of the object
print(Budget.to_json())

# convert the object into a dict
budget_dict = budget_instance.to_dict()
# create an instance of Budget from a dict
budget_from_dict = Budget.from_dict(budget_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


