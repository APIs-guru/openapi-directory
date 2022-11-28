import { SpeakeasyBase } from "../../../internal/utils";
import { KeyPhrasesDetectionJobFilter } from "./keyphrasesdetectionjobfilter";
export declare class ListKeyPhrasesDetectionJobsRequest extends SpeakeasyBase {
    filter?: KeyPhrasesDetectionJobFilter;
    maxResults?: number;
    nextToken?: string;
}
