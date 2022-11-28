import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrafficMirrorSession } from "./trafficmirrorsession";



export class ModifyTrafficMirrorSessionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  trafficMirrorSession?: TrafficMirrorSession;
}
