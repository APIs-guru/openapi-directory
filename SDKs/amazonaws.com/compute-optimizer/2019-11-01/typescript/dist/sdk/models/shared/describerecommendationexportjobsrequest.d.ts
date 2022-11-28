import { SpeakeasyBase } from "../../../internal/utils";
import { JobFilter } from "./jobfilter";
export declare class DescribeRecommendationExportJobsRequest extends SpeakeasyBase {
    filters?: JobFilter[];
    jobIds?: string[];
    maxResults?: number;
    nextToken?: string;
}
