import { SpeakeasyBase } from "../../../internal/utils";
import { TopicsDetectionJobFilter } from "./topicsdetectionjobfilter";
export declare class ListTopicsDetectionJobsRequest extends SpeakeasyBase {
    filter?: TopicsDetectionJobFilter;
    maxResults?: number;
    nextToken?: string;
}
