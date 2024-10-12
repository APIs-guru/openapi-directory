# PaymentDisputeActivityHistory

This type is used by the base response of the <strong>getActivities</strong> method, and includes a log of all activities of a payment dispute, from creation to resolution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity** | [**List[PaymentDisputeActivity]**](PaymentDisputeActivity.md) | This array holds all activities of a payment dispute, from creation to resolution. For each activity, the activity type, the actor, and a timestamp is shown. The &lt;strong&gt;getActivities&lt;/strong&gt; response is dynamic, and grows with each recorded activity. | [optional] 

## Example

```python
from openapi_client.models.payment_dispute_activity_history import PaymentDisputeActivityHistory

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentDisputeActivityHistory from a JSON string
payment_dispute_activity_history_instance = PaymentDisputeActivityHistory.from_json(json)
# print the JSON string representation of the object
print(PaymentDisputeActivityHistory.to_json())

# convert the object into a dict
payment_dispute_activity_history_dict = payment_dispute_activity_history_instance.to_dict()
# create an instance of PaymentDisputeActivityHistory from a dict
payment_dispute_activity_history_from_dict = PaymentDisputeActivityHistory.from_dict(payment_dispute_activity_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


