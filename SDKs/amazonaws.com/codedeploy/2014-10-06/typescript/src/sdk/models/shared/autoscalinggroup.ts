import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AutoScalingGroup
/** 
 * Information about an Auto Scaling group.
**/
export class AutoScalingGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=hook" })
  hook?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
