import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ScalingConstraints
/** 
 * The upper and lower EC2 instance limits for an automatic scaling policy. Automatic scaling activities triggered by automatic scaling rules will not cause an instance group to grow above or below these limits.
**/
export class ScalingConstraints extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxCapacity" })
  maxCapacity: number;

  @Metadata({ data: "json, name=MinCapacity" })
  minCapacity: number;
}
