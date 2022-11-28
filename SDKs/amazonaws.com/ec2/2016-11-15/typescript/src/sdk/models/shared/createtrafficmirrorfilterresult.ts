import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrafficMirrorFilter } from "./trafficmirrorfilter";



export class CreateTrafficMirrorFilterResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientToken?: string;

  @SpeakeasyMetadata()
  trafficMirrorFilter?: TrafficMirrorFilter;
}
