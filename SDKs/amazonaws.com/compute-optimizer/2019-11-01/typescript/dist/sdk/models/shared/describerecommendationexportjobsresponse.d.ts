import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RecommendationExportJob } from "./recommendationexportjob";
export declare class DescribeRecommendationExportJobsResponse extends SpeakeasyBase {
    nextToken?: string;
    recommendationExportJobs?: RecommendationExportJob[];
}
