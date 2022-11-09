import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Payload } from "./payload";


// SnsTopicPublishAction
/** 
 * Information required to publish the Amazon SNS message.
**/
export class SnsTopicPublishAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=payload" })
  payload?: Payload;

  @Metadata({ data: "json, name=targetArn" })
  targetArn: string;
}
