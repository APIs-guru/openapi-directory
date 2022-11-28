import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventsDetectionJobProperties } from "./eventsdetectionjobproperties";



export class DescribeEventsDetectionJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventsDetectionJobProperties" })
  eventsDetectionJobProperties?: EventsDetectionJobProperties;
}
