import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AlertTarget
/** 
 * A structure containing the alert target ARN and the role ARN.
**/
export class AlertTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=alertTargetArn" })
  alertTargetArn: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;
}
