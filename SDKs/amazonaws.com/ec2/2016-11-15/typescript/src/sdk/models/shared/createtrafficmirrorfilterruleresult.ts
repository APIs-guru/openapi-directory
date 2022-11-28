import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrafficMirrorFilterRule } from "./trafficmirrorfilterrule";



export class CreateTrafficMirrorFilterRuleResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientToken?: string;

  @SpeakeasyMetadata()
  trafficMirrorFilterRule?: TrafficMirrorFilterRule;
}
