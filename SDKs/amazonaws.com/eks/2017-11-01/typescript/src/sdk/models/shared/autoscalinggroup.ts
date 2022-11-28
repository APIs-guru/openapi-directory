import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AutoScalingGroup
/** 
 * An Auto Scaling group that is associated with an Amazon EKS managed node group.
**/
export class AutoScalingGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
