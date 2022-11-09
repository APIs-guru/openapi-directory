import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EventsDetectionJobFilter } from "./eventsdetectionjobfilter";


export class ListEventsDetectionJobsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filter" })
  filter?: EventsDetectionJobFilter;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
