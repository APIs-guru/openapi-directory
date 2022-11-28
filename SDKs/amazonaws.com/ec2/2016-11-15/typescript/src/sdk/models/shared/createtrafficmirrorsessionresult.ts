import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrafficMirrorSession } from "./trafficmirrorsession";



export class CreateTrafficMirrorSessionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientToken?: string;

  @SpeakeasyMetadata()
  trafficMirrorSession?: TrafficMirrorSession;
}
