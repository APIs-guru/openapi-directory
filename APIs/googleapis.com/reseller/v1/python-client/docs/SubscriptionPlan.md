# SubscriptionPlan

The `plan` property is required. In this version of the API, the G Suite plans are the flexible plan, annual commitment plan, and the 30-day free trial plan. For more information about the API\"s payment plans, see the API concepts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commitment_interval** | [**SubscriptionPlanCommitmentInterval**](SubscriptionPlanCommitmentInterval.md) |  | [optional] 
**is_commitment_plan** | **bool** | The &#x60;isCommitmentPlan&#x60; property&#39;s boolean value identifies the plan as an annual commitment plan: - &#x60;true&#x60; — The subscription&#39;s plan is an annual commitment plan. - &#x60;false&#x60; — The plan is not an annual commitment plan.  | [optional] 
**plan_name** | **str** | The &#x60;planName&#x60; property is required. This is the name of the subscription&#39;s plan. For more information about the Google payment plans, see the API concepts. Possible values are: - &#x60;ANNUAL_MONTHLY_PAY&#x60; — The annual commitment plan with monthly payments. *Caution: *&#x60;ANNUAL_MONTHLY_PAY&#x60; is returned as &#x60;ANNUAL&#x60; in all API responses. - &#x60;ANNUAL_YEARLY_PAY&#x60; — The annual commitment plan with yearly payments - &#x60;FLEXIBLE&#x60; — The flexible plan - &#x60;TRIAL&#x60; — The 30-day free trial plan. A subscription in trial will be suspended after the 30th free day if no payment plan is assigned. Calling &#x60;changePlan&#x60; will assign a payment plan to a trial but will not activate the plan. A trial will automatically begin its assigned payment plan after its 30th free day or immediately after calling &#x60;startPaidService&#x60;. - &#x60;FREE&#x60; — The free plan is exclusive to the Cloud Identity SKU and does not incur any billing.  | [optional] 

## Example

```python
from openapi_client.models.subscription_plan import SubscriptionPlan

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionPlan from a JSON string
subscription_plan_instance = SubscriptionPlan.from_json(json)
# print the JSON string representation of the object
print(SubscriptionPlan.to_json())

# convert the object into a dict
subscription_plan_dict = subscription_plan_instance.to_dict()
# create an instance of SubscriptionPlan from a dict
subscription_plan_from_dict = SubscriptionPlan.from_dict(subscription_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


