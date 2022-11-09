import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AutoScalingGroup
/** 
 * An Auto Scaling group that is associated with an Amazon EKS managed node group.
**/
export class AutoScalingGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
