import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrafficMirrorSession } from "./trafficmirrorsession";



export class DescribeTrafficMirrorSessionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: TrafficMirrorSession })
  trafficMirrorSessions?: TrafficMirrorSession[];
}
