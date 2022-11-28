import { SpeakeasyBase } from "../../../internal/utils";
import { TrafficMirrorFilterRule } from "./trafficmirrorfilterrule";
import { TrafficMirrorNetworkServiceEnum } from "./trafficmirrornetworkserviceenum";
import { Tag } from "./tag";
/**
 * Describes the Traffic Mirror filter.
**/
export declare class TrafficMirrorFilter extends SpeakeasyBase {
    description?: string;
    egressFilterRules?: TrafficMirrorFilterRule[];
    ingressFilterRules?: TrafficMirrorFilterRule[];
    networkServices?: TrafficMirrorNetworkServiceEnum[];
    tags?: Tag[];
    trafficMirrorFilterId?: string;
}
