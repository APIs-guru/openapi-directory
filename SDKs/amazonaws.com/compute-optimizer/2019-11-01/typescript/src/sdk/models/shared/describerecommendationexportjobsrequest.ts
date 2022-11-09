import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobFilter } from "./jobfilter";


export class DescribeRecommendationExportJobsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters", elemType: shared.JobFilter })
  filters?: JobFilter[];

  @Metadata({ data: "json, name=jobIds" })
  jobIds?: string[];

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
