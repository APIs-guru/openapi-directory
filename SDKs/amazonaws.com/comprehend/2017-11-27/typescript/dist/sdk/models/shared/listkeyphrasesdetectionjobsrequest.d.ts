import { SpeakeasyBase } from "../../../internal/utils/utils";
import { KeyPhrasesDetectionJobFilter } from "./keyphrasesdetectionjobfilter";
export declare class ListKeyPhrasesDetectionJobsRequest extends SpeakeasyBase {
    filter?: KeyPhrasesDetectionJobFilter;
    maxResults?: number;
    nextToken?: string;
}
