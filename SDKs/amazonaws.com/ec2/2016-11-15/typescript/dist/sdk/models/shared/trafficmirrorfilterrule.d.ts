import { SpeakeasyBase } from "../../../internal/utils";
import { TrafficMirrorPortRange } from "./trafficmirrorportrange";
import { TrafficMirrorRuleActionEnum } from "./trafficmirrorruleactionenum";
import { TrafficDirectionEnum } from "./trafficdirectionenum";
/**
 * Describes the Traffic Mirror rule.
**/
export declare class TrafficMirrorFilterRule extends SpeakeasyBase {
    description?: string;
    destinationCidrBlock?: string;
    destinationPortRange?: TrafficMirrorPortRange;
    protocol?: number;
    ruleAction?: TrafficMirrorRuleActionEnum;
    ruleNumber?: number;
    sourceCidrBlock?: string;
    sourcePortRange?: TrafficMirrorPortRange;
    trafficDirection?: TrafficDirectionEnum;
    trafficMirrorFilterId?: string;
    trafficMirrorFilterRuleId?: string;
}
