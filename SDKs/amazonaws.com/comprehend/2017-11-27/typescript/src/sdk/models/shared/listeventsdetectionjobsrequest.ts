import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventsDetectionJobFilter } from "./eventsdetectionjobfilter";



export class ListEventsDetectionJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filter" })
  filter?: EventsDetectionJobFilter;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
