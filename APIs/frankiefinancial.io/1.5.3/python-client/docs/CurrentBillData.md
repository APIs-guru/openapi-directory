# CurrentBillData

Data from uploaded bill

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_address** | **str** | Account (Billing) address. | 
**account_name** | **str** | Customer name. | 
**account_number** | **str** | Customer account number | 
**actual_plan_total_cost** | **float** | Recalculated cost of the plan based on users comsumption and plan rates including discounts, rebates, concessions etc... Additional fees such as credit card processing fees are ignored. | 
**bill_date_from** | **str** | Start date for billing period | 
**bill_date_to** | **str** | End date for billing period | 
**days** | **int** | Number of days in billing period (billDateTo - billDateFrom) | 
**discount** | **float** | Total value of all unconditional discounts applied to the bill | 
**fuel_type** | **str** | * &#x60;E&#x60; - Electricity  | 
**nmi** | **str** | National Meter identifier (NMI) | 
**periods** | [**List[Period]**](Period.md) | Rates and charges for each period on the bill | 
**retailer** | [**Retailer**](Retailer.md) |  | 
**solar** | [**List[CurrentBillDataSolarInner]**](CurrentBillDataSolarInner.md) | Array of rates and charges for solar on the bill, by period. If no solar is present on the uploaded bill this object will not be present. | [optional] 
**supply_address** | **str** | Supply address. This may differ from account address if bill payers address is different from account address. | 

## Example

```python
from openapi_client.models.current_bill_data import CurrentBillData

# TODO update the JSON string below
json = "{}"
# create an instance of CurrentBillData from a JSON string
current_bill_data_instance = CurrentBillData.from_json(json)
# print the JSON string representation of the object
print(CurrentBillData.to_json())

# convert the object into a dict
current_bill_data_dict = current_bill_data_instance.to_dict()
# create an instance of CurrentBillData from a dict
current_bill_data_from_dict = CurrentBillData.from_dict(current_bill_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


