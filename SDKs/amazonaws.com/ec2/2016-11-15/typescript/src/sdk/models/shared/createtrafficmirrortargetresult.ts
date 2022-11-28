import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrafficMirrorTarget } from "./trafficmirrortarget";



export class CreateTrafficMirrorTargetResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientToken?: string;

  @SpeakeasyMetadata()
  trafficMirrorTarget?: TrafficMirrorTarget;
}
