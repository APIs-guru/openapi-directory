import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EventsDetectionJobProperties } from "./eventsdetectionjobproperties";


export class DescribeEventsDetectionJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventsDetectionJobProperties" })
  eventsDetectionJobProperties?: EventsDetectionJobProperties;
}
