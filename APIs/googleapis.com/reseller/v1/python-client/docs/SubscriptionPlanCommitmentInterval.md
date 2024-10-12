# SubscriptionPlanCommitmentInterval

In this version of the API, annual commitment plan's interval is one year. *Note: *When `billingMethod` value is `OFFLINE`, the subscription property object `plan.commitmentInterval` is omitted in all API responses. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | An annual commitment plan&#39;s interval&#39;s &#x60;endTime&#x60; in milliseconds using the UNIX Epoch format. See an example Epoch converter. | [optional] 
**start_time** | **str** | An annual commitment plan&#39;s interval&#39;s &#x60;startTime&#x60; in milliseconds using UNIX Epoch format. See an example Epoch converter. | [optional] 

## Example

```python
from openapi_client.models.subscription_plan_commitment_interval import SubscriptionPlanCommitmentInterval

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionPlanCommitmentInterval from a JSON string
subscription_plan_commitment_interval_instance = SubscriptionPlanCommitmentInterval.from_json(json)
# print the JSON string representation of the object
print(SubscriptionPlanCommitmentInterval.to_json())

# convert the object into a dict
subscription_plan_commitment_interval_dict = subscription_plan_commitment_interval_instance.to_dict()
# create an instance of SubscriptionPlanCommitmentInterval from a dict
subscription_plan_commitment_interval_from_dict = SubscriptionPlanCommitmentInterval.from_dict(subscription_plan_commitment_interval_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


