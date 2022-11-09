import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EntitiesDetectionJobFilter } from "./entitiesdetectionjobfilter";
export declare class ListEntitiesDetectionJobsRequest extends SpeakeasyBase {
    filter?: EntitiesDetectionJobFilter;
    maxResults?: number;
    nextToken?: string;
}
