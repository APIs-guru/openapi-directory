import { SpeakeasyBase } from "../../../internal/utils";
import { DominantLanguageDetectionJobFilter } from "./dominantlanguagedetectionjobfilter";
export declare class ListDominantLanguageDetectionJobsRequest extends SpeakeasyBase {
    filter?: DominantLanguageDetectionJobFilter;
    maxResults?: number;
    nextToken?: string;
}
