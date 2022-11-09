import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PublishFindingToSnsParams
/** 
 * Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages.
**/
export class PublishFindingToSnsParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=topicArn" })
  topicArn: string;
}
