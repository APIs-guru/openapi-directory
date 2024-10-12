# BillingPlan

Billing Plan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **Dict[str, object]** | Collection of attribute values. | [optional] 
**id** | **str** | The Billing Plan ID | [optional] 
**limits** | **Dict[str, float]** | A collection of named numeric values | [optional] 
**parent_id** | **str** |  | [optional] 
**payment_source** | **str** | Service that receives payments for this billing plan. | [optional] 
**price** | **float** | Price of the Billing Plan | [optional] 
**service** | **str** | Name of the service that the plan applies to. | [optional] 
**version** | **str** | Version of the Billing Plan schema | [optional] 

## Example

```python
from openapi_client.models.billing_plan import BillingPlan

# TODO update the JSON string below
json = "{}"
# create an instance of BillingPlan from a JSON string
billing_plan_instance = BillingPlan.from_json(json)
# print the JSON string representation of the object
print(BillingPlan.to_json())

# convert the object into a dict
billing_plan_dict = billing_plan_instance.to_dict()
# create an instance of BillingPlan from a dict
billing_plan_from_dict = BillingPlan.from_dict(billing_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


