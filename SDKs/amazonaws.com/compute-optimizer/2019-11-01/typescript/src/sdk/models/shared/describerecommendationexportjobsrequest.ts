import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobFilter } from "./jobfilter";



export class DescribeRecommendationExportJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters", elemType: JobFilter })
  filters?: JobFilter[];

  @SpeakeasyMetadata({ data: "json, name=jobIds" })
  jobIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
