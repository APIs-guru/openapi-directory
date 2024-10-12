# GoogleCloudBillingBudgetsV1NotificationsRule

NotificationsRule defines notifications that are sent based on budget spend and thresholds.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_default_iam_recipients** | **bool** | Optional. When set to true, disables default notifications sent when a threshold is exceeded. Default notifications are sent to those with Billing Account Administrator and Billing Account User IAM roles for the target account. | [optional] 
**enable_project_level_recipients** | **bool** | Optional. When set to true, and when the budget has a single project configured, notifications will be sent to project level recipients of that project. This field will be ignored if the budget has multiple or no project configured. Currently, project level recipients are the users with &#x60;Owner&#x60; role on a cloud project. | [optional] 
**monitoring_notification_channels** | **List[str]** | Optional. Email targets to send notifications to when a threshold is exceeded. This is in addition to the &#x60;DefaultIamRecipients&#x60; who receive alert emails based on their billing account IAM role. The value is the full REST resource name of a Cloud Monitoring email notification channel with the form &#x60;projects/{project_id}/notificationChannels/{channel_id}&#x60;. A maximum of 5 email notifications are allowed. To customize budget alert email recipients with monitoring notification channels, you _must create the monitoring notification channels before you link them to a budget_. For guidance on setting up notification channels to use with budgets, see [Customize budget alert email recipients](https://cloud.google.com/billing/docs/how-to/budgets-notification-recipients). For Cloud Billing budget alerts, you _must use email notification channels_. The other types of notification channels are _not_ supported, such as Slack, SMS, or PagerDuty. If you want to [send budget notifications to Slack](https://cloud.google.com/billing/docs/how-to/notify#send_notifications_to_slack), use a pubsubTopic and configure [programmatic notifications](https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications). | [optional] 
**pubsub_topic** | **str** | Optional. The name of the Pub/Sub topic where budget-related messages are published, in the form &#x60;projects/{project_id}/topics/{topic_id}&#x60;. Updates are sent to the topic at regular intervals; the timing of the updates is not dependent on the [threshold rules](#thresholdrule) you&#39;ve set. Note that if you want your [Pub/Sub JSON object](https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification_format) to contain data for &#x60;alertThresholdExceeded&#x60;, you need at least one [alert threshold rule](#thresholdrule). When you set threshold rules, you must also enable at least one of the email notification options, either using the default IAM recipients or Cloud Monitoring email notification channels. To use Pub/Sub topics with budgets, you must do the following: 1. Create the Pub/Sub topic before connecting it to your budget. For guidance, see [Manage programmatic budget alert notifications](https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications). 2. Grant the API caller the &#x60;pubsub.topics.setIamPolicy&#x60; permission on the Pub/Sub topic. If not set, the API call fails with PERMISSION_DENIED. For additional details on Pub/Sub roles and permissions, see [Permissions required for this task](https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#permissions_required_for_this_task). | [optional] 
**schema_version** | **str** | Optional. Required when NotificationsRule.pubsub_topic is set. The schema version of the notification sent to NotificationsRule.pubsub_topic. Only \&quot;1.0\&quot; is accepted. It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification_format. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_budgets_v1_notifications_rule import GoogleCloudBillingBudgetsV1NotificationsRule

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingBudgetsV1NotificationsRule from a JSON string
google_cloud_billing_budgets_v1_notifications_rule_instance = GoogleCloudBillingBudgetsV1NotificationsRule.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingBudgetsV1NotificationsRule.to_json())

# convert the object into a dict
google_cloud_billing_budgets_v1_notifications_rule_dict = google_cloud_billing_budgets_v1_notifications_rule_instance.to_dict()
# create an instance of GoogleCloudBillingBudgetsV1NotificationsRule from a dict
google_cloud_billing_budgets_v1_notifications_rule_from_dict = GoogleCloudBillingBudgetsV1NotificationsRule.from_dict(google_cloud_billing_budgets_v1_notifications_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


