import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RecommendationExportJob } from "./recommendationexportjob";


export class DescribeRecommendationExportJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=recommendationExportJobs", elemType: shared.RecommendationExportJob })
  recommendationExportJobs?: RecommendationExportJob[];
}
