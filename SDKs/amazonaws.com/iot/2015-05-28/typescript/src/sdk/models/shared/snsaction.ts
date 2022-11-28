import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessageFormatEnum } from "./messageformatenum";



// SnsAction
/** 
 * Describes an action to publish to an Amazon SNS topic.
**/
export class SnsAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messageFormat" })
  messageFormat?: MessageFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=targetArn" })
  targetArn: string;
}
