import { SpeakeasyBase } from "../../../internal/utils";
import { SentimentDetectionJobFilter } from "./sentimentdetectionjobfilter";
export declare class ListSentimentDetectionJobsRequest extends SpeakeasyBase {
    filter?: SentimentDetectionJobFilter;
    maxResults?: number;
    nextToken?: string;
}
