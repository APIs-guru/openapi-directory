import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { TrafficMirrorTargetTypeEnum } from "./trafficmirrortargettypeenum";



// TrafficMirrorTarget
/** 
 * Describes a Traffic Mirror target.
**/
export class TrafficMirrorTarget extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  networkInterfaceId?: string;

  @SpeakeasyMetadata()
  networkLoadBalancerArn?: string;

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  trafficMirrorTargetId?: string;

  @SpeakeasyMetadata()
  type?: TrafficMirrorTargetTypeEnum;
}
