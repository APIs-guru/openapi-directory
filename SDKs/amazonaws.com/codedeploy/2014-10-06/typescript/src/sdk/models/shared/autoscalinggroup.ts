import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AutoScalingGroup
/** 
 * Information about an Auto Scaling group.
**/
export class AutoScalingGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hook" })
  hook?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
