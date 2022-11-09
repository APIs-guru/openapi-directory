import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SentimentDetectionJobProperties } from "./sentimentdetectionjobproperties";
export declare class ListSentimentDetectionJobsResponse extends SpeakeasyBase {
    nextToken?: string;
    sentimentDetectionJobPropertiesList?: SentimentDetectionJobProperties[];
}
