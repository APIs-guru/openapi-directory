import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrafficMirrorTarget } from "./trafficmirrortarget";



export class DescribeTrafficMirrorTargetsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: TrafficMirrorTarget })
  trafficMirrorTargets?: TrafficMirrorTarget[];
}
