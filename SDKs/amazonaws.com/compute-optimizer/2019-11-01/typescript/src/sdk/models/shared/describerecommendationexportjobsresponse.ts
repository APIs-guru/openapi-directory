import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecommendationExportJob } from "./recommendationexportjob";



export class DescribeRecommendationExportJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=recommendationExportJobs", elemType: RecommendationExportJob })
  recommendationExportJobs?: RecommendationExportJob[];
}
