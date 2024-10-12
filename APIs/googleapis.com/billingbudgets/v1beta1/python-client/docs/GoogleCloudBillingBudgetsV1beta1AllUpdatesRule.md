# GoogleCloudBillingBudgetsV1beta1AllUpdatesRule

AllUpdatesRule defines notifications that are sent based on budget spend and thresholds.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_default_iam_recipients** | **bool** | Optional. When set to true, disables default notifications sent when a threshold is exceeded. Default notifications are sent to those with Billing Account Administrator and Billing Account User IAM roles for the target account. | [optional] 
**enable_project_level_recipients** | **bool** | Optional. When set to true, and when the budget has a single project configured, notifications will be sent to project level recipients of that project. This field will be ignored if the budget has multiple or no project configured. Currently, project level recipients are the users with &#x60;Owner&#x60; role on a cloud project. | [optional] 
**monitoring_notification_channels** | **List[str]** | Optional. Targets to send notifications to when a threshold is exceeded. This is in addition to default recipients who have billing account IAM roles. The value is the full REST resource name of a monitoring notification channel with the form &#x60;projects/{project_id}/notificationChannels/{channel_id}&#x60;. A maximum of 5 channels are allowed. See https://cloud.google.com/billing/docs/how-to/budgets-notification-recipients for more details. | [optional] 
**pubsub_topic** | **str** | Optional. The name of the Pub/Sub topic where budget related messages will be published, in the form &#x60;projects/{project_id}/topics/{topic_id}&#x60;. Updates are sent at regular intervals to the topic. The topic needs to be created before the budget is created; see https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications for more details. Caller is expected to have &#x60;pubsub.topics.setIamPolicy&#x60; permission on the topic when it&#39;s set for a budget, otherwise, the API call will fail with PERMISSION_DENIED. See https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#permissions_required_for_this_task for more details on Pub/Sub roles and permissions. | [optional] 
**schema_version** | **str** | Optional. Required when AllUpdatesRule.pubsub_topic is set. The schema version of the notification sent to AllUpdatesRule.pubsub_topic. Only \&quot;1.0\&quot; is accepted. It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification_format. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_budgets_v1beta1_all_updates_rule import GoogleCloudBillingBudgetsV1beta1AllUpdatesRule

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingBudgetsV1beta1AllUpdatesRule from a JSON string
google_cloud_billing_budgets_v1beta1_all_updates_rule_instance = GoogleCloudBillingBudgetsV1beta1AllUpdatesRule.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingBudgetsV1beta1AllUpdatesRule.to_json())

# convert the object into a dict
google_cloud_billing_budgets_v1beta1_all_updates_rule_dict = google_cloud_billing_budgets_v1beta1_all_updates_rule_instance.to_dict()
# create an instance of GoogleCloudBillingBudgetsV1beta1AllUpdatesRule from a dict
google_cloud_billing_budgets_v1beta1_all_updates_rule_from_dict = GoogleCloudBillingBudgetsV1beta1AllUpdatesRule.from_dict(google_cloud_billing_budgets_v1beta1_all_updates_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


