import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventsDetectionJobProperties } from "./eventsdetectionjobproperties";



export class ListEventsDetectionJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventsDetectionJobPropertiesList", elemType: EventsDetectionJobProperties })
  eventsDetectionJobPropertiesList?: EventsDetectionJobProperties[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
