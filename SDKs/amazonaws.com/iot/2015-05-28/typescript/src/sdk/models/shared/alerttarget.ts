import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AlertTarget
/** 
 * A structure containing the alert target ARN and the role ARN.
**/
export class AlertTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alertTargetArn" })
  alertTargetArn: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;
}
