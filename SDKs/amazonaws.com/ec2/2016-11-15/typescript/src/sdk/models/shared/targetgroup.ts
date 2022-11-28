import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TargetGroup
/** 
 * Describes a load balancer target group.
**/
export class TargetGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: string;
}
