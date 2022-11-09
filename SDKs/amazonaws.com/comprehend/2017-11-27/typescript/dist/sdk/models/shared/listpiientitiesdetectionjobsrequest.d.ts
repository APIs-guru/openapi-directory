import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PiiEntitiesDetectionJobFilter } from "./piientitiesdetectionjobfilter";
export declare class ListPiiEntitiesDetectionJobsRequest extends SpeakeasyBase {
    filter?: PiiEntitiesDetectionJobFilter;
    maxResults?: number;
    nextToken?: string;
}
