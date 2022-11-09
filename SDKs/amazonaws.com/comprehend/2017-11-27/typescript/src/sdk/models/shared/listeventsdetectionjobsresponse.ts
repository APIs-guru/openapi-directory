import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventsDetectionJobProperties } from "./eventsdetectionjobproperties";


export class ListEventsDetectionJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventsDetectionJobPropertiesList", elemType: shared.EventsDetectionJobProperties })
  eventsDetectionJobPropertiesList?: EventsDetectionJobProperties[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
