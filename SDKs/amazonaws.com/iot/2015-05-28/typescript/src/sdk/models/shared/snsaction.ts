import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MessageFormatEnum } from "./messageformatenum";


// SnsAction
/** 
 * Describes an action to publish to an Amazon SNS topic.
**/
export class SnsAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=messageFormat" })
  messageFormat?: MessageFormatEnum;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=targetArn" })
  targetArn: string;
}
