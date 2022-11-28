import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages.
**/
export declare class PublishFindingToSnsParams extends SpeakeasyBase {
    topicArn: string;
}
