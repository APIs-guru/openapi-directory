import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrafficMirrorPortRange } from "./trafficmirrorportrange";
import { TrafficMirrorRuleActionEnum } from "./trafficmirrorruleactionenum";
import { TrafficDirectionEnum } from "./trafficdirectionenum";



// TrafficMirrorFilterRule
/** 
 * Describes the Traffic Mirror rule.
**/
export class TrafficMirrorFilterRule extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  destinationCidrBlock?: string;

  @SpeakeasyMetadata()
  destinationPortRange?: TrafficMirrorPortRange;

  @SpeakeasyMetadata()
  protocol?: number;

  @SpeakeasyMetadata()
  ruleAction?: TrafficMirrorRuleActionEnum;

  @SpeakeasyMetadata()
  ruleNumber?: number;

  @SpeakeasyMetadata()
  sourceCidrBlock?: string;

  @SpeakeasyMetadata()
  sourcePortRange?: TrafficMirrorPortRange;

  @SpeakeasyMetadata()
  trafficDirection?: TrafficDirectionEnum;

  @SpeakeasyMetadata()
  trafficMirrorFilterId?: string;

  @SpeakeasyMetadata()
  trafficMirrorFilterRuleId?: string;
}
