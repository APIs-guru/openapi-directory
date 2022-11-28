import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrafficMirrorFilterRule } from "./trafficmirrorfilterrule";



export class ModifyTrafficMirrorFilterRuleResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  trafficMirrorFilterRule?: TrafficMirrorFilterRule;
}
