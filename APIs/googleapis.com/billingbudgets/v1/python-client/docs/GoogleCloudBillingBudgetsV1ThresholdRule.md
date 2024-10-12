# GoogleCloudBillingBudgetsV1ThresholdRule

ThresholdRule contains the definition of a threshold. Threshold rules define the triggering events used to generate a budget notification email. When a threshold is crossed (spend exceeds the specified percentages of the budget), budget alert emails are sent to the email recipients you specify in the [NotificationsRule](#notificationsrule). Threshold rules also affect the fields included in the [JSON data object](https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification_format) sent to a Pub/Sub topic. Threshold rules are _required_ if using email notifications. Threshold rules are _optional_ if only setting a [`pubsubTopic` NotificationsRule](#NotificationsRule), unless you want your JSON data object to include data about the thresholds you set. For more information, see [set budget threshold rules and actions](https://cloud.google.com/billing/docs/how-to/budgets#budget-actions).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spend_basis** | **str** | Optional. The type of basis used to determine if spend has passed the threshold. Behavior defaults to CURRENT_SPEND if not set. | [optional] 
**threshold_percent** | **float** | Required. Send an alert when this threshold is exceeded. This is a 1.0-based percentage, so 0.5 &#x3D; 50%. Validation: non-negative number. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_budgets_v1_threshold_rule import GoogleCloudBillingBudgetsV1ThresholdRule

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingBudgetsV1ThresholdRule from a JSON string
google_cloud_billing_budgets_v1_threshold_rule_instance = GoogleCloudBillingBudgetsV1ThresholdRule.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingBudgetsV1ThresholdRule.to_json())

# convert the object into a dict
google_cloud_billing_budgets_v1_threshold_rule_dict = google_cloud_billing_budgets_v1_threshold_rule_instance.to_dict()
# create an instance of GoogleCloudBillingBudgetsV1ThresholdRule from a dict
google_cloud_billing_budgets_v1_threshold_rule_from_dict = GoogleCloudBillingBudgetsV1ThresholdRule.from_dict(google_cloud_billing_budgets_v1_threshold_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


