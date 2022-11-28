import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SqsQueueConfiguration
/** 
 * The proposed access control configuration for an Amazon SQS queue. You can propose a configuration for a new Amazon SQS queue or an existing Amazon SQS queue that you own by specifying the Amazon SQS policy. If the configuration is for an existing Amazon SQS queue and you do not specify the Amazon SQS policy, the access preview uses the existing Amazon SQS policy for the queue. If the access preview is for a new resource and you do not specify the policy, the access preview assumes an Amazon SQS queue without a policy. To propose deletion of an existing Amazon SQS queue policy, you can specify an empty string for the Amazon SQS policy. For more information about Amazon SQS policy limits, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-policies.html">Quotas related to policies</a>.
**/
export class SqsQueueConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=queuePolicy" })
  queuePolicy?: string;
}
