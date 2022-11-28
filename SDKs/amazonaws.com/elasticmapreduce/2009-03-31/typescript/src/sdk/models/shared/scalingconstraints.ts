import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScalingConstraints
/** 
 * The upper and lower EC2 instance limits for an automatic scaling policy. Automatic scaling activities triggered by automatic scaling rules will not cause an instance group to grow above or below these limits.
**/
export class ScalingConstraints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxCapacity" })
  maxCapacity: number;

  @SpeakeasyMetadata({ data: "json, name=MinCapacity" })
  minCapacity: number;
}
