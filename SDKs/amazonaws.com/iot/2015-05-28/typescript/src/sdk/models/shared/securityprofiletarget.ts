import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SecurityProfileTarget
/** 
 * A target to which an alert is sent when a security profile behavior is violated.
**/
export class SecurityProfileTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;
}
