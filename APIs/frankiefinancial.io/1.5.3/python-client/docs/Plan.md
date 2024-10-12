# Plan

All information associated with a given plan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**benefits** | [**Benefits**](Benefits.md) |  | [optional] 
**conditions** | [**Conditions**](Conditions.md) |  | [optional] 
**contract** | [**Contract**](Contract.md) |  | [optional] 
**default_offer_message** | **str** | Default Offer (DMO/VDO) text to be displayed for this plan | 
**direct_debit_required** | **bool** | Is payment by direct debit required in order to subscribe to this plan | 
**discounts** | [**PlanDiscounts**](PlanDiscounts.md) |  | [optional] 
**estimated_base_cost** | **float** | Estimated cost of this plan, based on the usage from the uploaded bill, with no conditional discounts applied. If this plan offers no conditional discounts the estimatedTotalCost and the estimatedBaseCost will be the same. | 
**estimated_saving** | **float** | The estimated saving the customer could have realised if they had been on this plan during the billing period | 
**estimated_total_cost** | **float** | Estimated cost of this plan, based on the usage from uploaded bill, with all conditional discounts applied. | 
**fees_and_charges** | [**Fees**](Fees.md) |  | [optional] 
**green_options** | [**NameValue**](NameValue.md) |  | [optional] 
**id** | **int** | Unique identifier for this plan. This ID is passed when calling the switch API. | 
**name** | **str** | Name of the plan | 
**pay_on_time_required** | **bool** | Is pay on time required in order to subscribe to this plan | 
**payment_options** | [**NameValue**](NameValue.md) |  | [optional] 
**rates** | [**Rates**](Rates.md) |  | 
**retailer** | [**Retailer**](Retailer.md) |  | 
**type** | **str** | The type of energy plan * &#x60;SR&#x60; - Single Rate * &#x60;TOU&#x60; - Time Of Use | 
**url** | **str** | Link to BPID (Basic Plan Information Document (NSW, SA, QLD, ACT)) or EPFS (Energy Price Fact Sheet (VIC)) | 

## Example

```python
from openapi_client.models.plan import Plan

# TODO update the JSON string below
json = "{}"
# create an instance of Plan from a JSON string
plan_instance = Plan.from_json(json)
# print the JSON string representation of the object
print(Plan.to_json())

# convert the object into a dict
plan_dict = plan_instance.to_dict()
# create an instance of Plan from a dict
plan_from_dict = Plan.from_dict(plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


