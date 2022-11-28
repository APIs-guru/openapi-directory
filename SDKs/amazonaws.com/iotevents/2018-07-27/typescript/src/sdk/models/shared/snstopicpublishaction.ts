import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Payload } from "./payload";



// SnsTopicPublishAction
/** 
 * Information required to publish the Amazon SNS message.
**/
export class SnsTopicPublishAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: Payload;

  @SpeakeasyMetadata({ data: "json, name=targetArn" })
  targetArn: string;
}
