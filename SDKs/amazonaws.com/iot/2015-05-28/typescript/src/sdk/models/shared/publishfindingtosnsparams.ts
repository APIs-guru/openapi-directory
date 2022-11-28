import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PublishFindingToSnsParams
/** 
 * Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages.
**/
export class PublishFindingToSnsParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=topicArn" })
  topicArn: string;
}
