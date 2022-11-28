# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { AddNotificationChannelRequest, AddNotificationChannelResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AddNotificationChannelRequest = {
  headers: {
    xAmzAlgorithm: "corrupti",
    xAmzContentSha256: "voluptatem",
    xAmzCredential: "quasi",
    xAmzDate: "repellat",
    xAmzSecurityToken: "rem",
    xAmzSignature: "nisi",
    xAmzSignedHeaders: "nulla",
  },
  request: {
    config: {
      sns: {
        topicArn: "et",
      },
    },
  },
};

sdk.sdk.addNotificationChannel(req).then((res: AddNotificationChannelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `addNotificationChannel` - <p> Adds a notification channel to DevOps Guru. A notification channel is used to notify you about important DevOps Guru events, such as when an insight is generated. </p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions for cross account Amazon SNS topics</a>.</p> <p>If you use an Amazon SNS topic that is encrypted by an AWS Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for AWS KMS–encrypted Amazon SNS topics</a>.</p>
* `describeAccountHealth` -  Returns the number of open reactive insights, the number of open proactive insights, and the number of metrics analyzed in your AWS account. Use these numbers to gauge the health of operations in your AWS account. 
* `describeAccountOverview` -  For the time range passed in, returns the number of open reactive insight that were created, the number of open proactive insights that were created, and the Mean Time to Recover (MTTR) for all closed reactive insights. 
* `describeAnomaly` -  Returns details about an anomaly that you specify using its ID. 
* `describeFeedback` -  Returns the most recent feedback submitted in the current AWS account and Region. 
* `describeInsight` -  Returns details about an insight that you specify using its ID. 
* `describeResourceCollectionHealth` -  Returns the number of open proactive insights, open reactive insights, and the Mean Time to Recover (MTTR) for all closed insights in resource collections in your account. You specify the type of AWS resources collection. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks. 
* `describeServiceIntegration` -  Returns the integration status of services that are integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is AWS Systems Manager, which can be used to create an OpsItem for each generated insight. 
* `getCostEstimation` - Returns an estimate of the monthly cost for DevOps Guru to analyze your AWS resources. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.
* `getResourceCollection` -  Returns lists AWS resources that are of the specified resource collection type. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks. 
* `listAnomaliesForInsight` -  Returns a list of the anomalies that belong to an insight that you specify using its ID. 
* `listEvents` -  Returns a list of the events emitted by the resources that are evaluated by DevOps Guru. You can use filters to specify which events are returned. 
* `listInsights` -  Returns a list of insights in your AWS account. You can specify which insights are returned by their start time and status (<code>ONGOING</code>, <code>CLOSED</code>, or <code>ANY</code>). 
* `listNotificationChannels` -  Returns a list of notification channels configured for DevOps Guru. Each notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS). 
* `listRecommendations` -  Returns a list of a specified insight's recommendations. Each recommendation includes a list of related metrics and a list of related events. 
* `putFeedback` -  Collects customer feedback about the specified insight. 
* `removeNotificationChannel` -  Removes a notification channel from DevOps Guru. A notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations. 
* `searchInsights` - <p> Returns a list of insights in your AWS account. You can specify which insights are returned by their start time, one or more statuses (<code>ONGOING</code>, <code>CLOSED</code>, and <code>CLOSED</code>), one or more severities (<code>LOW</code>, <code>MEDIUM</code>, and <code>HIGH</code>), and type (<code>REACTIVE</code> or <code>PROACTIVE</code>). </p> <p> Use the <code>Filters</code> parameter to specify status and severity search parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or <code>PROACTIVE</code> in your search. </p>
* `startCostEstimation` - Starts the creation of an estimate of the monthly cost to analyze your AWS resources.
* `updateResourceCollection` -  Updates the collection of resources that DevOps Guru analyzes. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks. This method also creates the IAM role required for you to use DevOps Guru. 
* `updateServiceIntegration` -  Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is AWS Systems Manager, which can be used to create an OpsItem for each generated insight. 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
