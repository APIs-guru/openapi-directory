import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DominantLanguageDetectionJobFilter } from "./dominantlanguagedetectionjobfilter";
export declare class ListDominantLanguageDetectionJobsRequest extends SpeakeasyBase {
    filter?: DominantLanguageDetectionJobFilter;
    maxResults?: number;
    nextToken?: string;
}
