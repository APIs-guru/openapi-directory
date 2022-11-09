import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EventsDetectionJobFilter } from "./eventsdetectionjobfilter";
export declare class ListEventsDetectionJobsRequest extends SpeakeasyBase {
    filter?: EventsDetectionJobFilter;
    maxResults?: number;
    nextToken?: string;
}
