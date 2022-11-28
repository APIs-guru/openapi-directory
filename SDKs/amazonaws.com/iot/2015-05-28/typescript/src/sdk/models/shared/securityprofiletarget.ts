import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SecurityProfileTarget
/** 
 * A target to which an alert is sent when a security profile behavior is violated.
**/
export class SecurityProfileTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;
}
