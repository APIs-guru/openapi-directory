import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrafficMirrorFilterRule } from "./trafficmirrorfilterrule";
import { TrafficMirrorNetworkServiceEnum } from "./trafficmirrornetworkserviceenum";
import { Tag } from "./tag";



// TrafficMirrorFilter
/** 
 * Describes the Traffic Mirror filter.
**/
export class TrafficMirrorFilter extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata({ elemType: TrafficMirrorFilterRule })
  egressFilterRules?: TrafficMirrorFilterRule[];

  @SpeakeasyMetadata({ elemType: TrafficMirrorFilterRule })
  ingressFilterRules?: TrafficMirrorFilterRule[];

  @SpeakeasyMetadata()
  networkServices?: TrafficMirrorNetworkServiceEnum[];

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  trafficMirrorFilterId?: string;
}
