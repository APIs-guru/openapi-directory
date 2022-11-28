import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrafficMirrorFilter } from "./trafficmirrorfilter";



export class DescribeTrafficMirrorFiltersResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: TrafficMirrorFilter })
  trafficMirrorFilters?: TrafficMirrorFilter[];
}
