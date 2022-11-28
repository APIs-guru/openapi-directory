# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.AddNotificationChannelRequest(
    headers=operations.AddNotificationChannelHeaders(
        x_amz_algorithm="corrupti",
        x_amz_content_sha256="voluptatem",
        x_amz_credential="quasi",
        x_amz_date="repellat",
        x_amz_security_token="rem",
        x_amz_signature="nisi",
        x_amz_signed_headers="nulla",
    ),
    request=operations.AddNotificationChannelRequestBody(
        config=operations.AddNotificationChannelRequestBodyConfig(
            sns=shared.SnsChannelConfig(
                topic_arn="et",
            ),
        ),
    ),
)
    
res = s.sdk.add_notification_channel(req)

if res.add_notification_channel_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `add_notification_channel` - <p> Adds a notification channel to DevOps Guru. A notification channel is used to notify you about important DevOps Guru events, such as when an insight is generated. </p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions for cross account Amazon SNS topics</a>.</p> <p>If you use an Amazon SNS topic that is encrypted by an AWS Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for AWS KMS–encrypted Amazon SNS topics</a>.</p>
* `describe_account_health` -  Returns the number of open reactive insights, the number of open proactive insights, and the number of metrics analyzed in your AWS account. Use these numbers to gauge the health of operations in your AWS account. 
* `describe_account_overview` -  For the time range passed in, returns the number of open reactive insight that were created, the number of open proactive insights that were created, and the Mean Time to Recover (MTTR) for all closed reactive insights. 
* `describe_anomaly` -  Returns details about an anomaly that you specify using its ID. 
* `describe_feedback` -  Returns the most recent feedback submitted in the current AWS account and Region. 
* `describe_insight` -  Returns details about an insight that you specify using its ID. 
* `describe_resource_collection_health` -  Returns the number of open proactive insights, open reactive insights, and the Mean Time to Recover (MTTR) for all closed insights in resource collections in your account. You specify the type of AWS resources collection. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks. 
* `describe_service_integration` -  Returns the integration status of services that are integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is AWS Systems Manager, which can be used to create an OpsItem for each generated insight. 
* `get_cost_estimation` - Returns an estimate of the monthly cost for DevOps Guru to analyze your AWS resources. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.
* `get_resource_collection` -  Returns lists AWS resources that are of the specified resource collection type. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks. 
* `list_anomalies_for_insight` -  Returns a list of the anomalies that belong to an insight that you specify using its ID. 
* `list_events` -  Returns a list of the events emitted by the resources that are evaluated by DevOps Guru. You can use filters to specify which events are returned. 
* `list_insights` -  Returns a list of insights in your AWS account. You can specify which insights are returned by their start time and status (<code>ONGOING</code>, <code>CLOSED</code>, or <code>ANY</code>). 
* `list_notification_channels` -  Returns a list of notification channels configured for DevOps Guru. Each notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS). 
* `list_recommendations` -  Returns a list of a specified insight's recommendations. Each recommendation includes a list of related metrics and a list of related events. 
* `put_feedback` -  Collects customer feedback about the specified insight. 
* `remove_notification_channel` -  Removes a notification channel from DevOps Guru. A notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations. 
* `search_insights` - <p> Returns a list of insights in your AWS account. You can specify which insights are returned by their start time, one or more statuses (<code>ONGOING</code>, <code>CLOSED</code>, and <code>CLOSED</code>), one or more severities (<code>LOW</code>, <code>MEDIUM</code>, and <code>HIGH</code>), and type (<code>REACTIVE</code> or <code>PROACTIVE</code>). </p> <p> Use the <code>Filters</code> parameter to specify status and severity search parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or <code>PROACTIVE</code> in your search. </p>
* `start_cost_estimation` - Starts the creation of an estimate of the monthly cost to analyze your AWS resources.
* `update_resource_collection` -  Updates the collection of resources that DevOps Guru analyzes. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks. This method also creates the IAM role required for you to use DevOps Guru. 
* `update_service_integration` -  Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is AWS Systems Manager, which can be used to create an OpsItem for each generated insight. 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
