import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SentimentDetectionJobFilter } from "./sentimentdetectionjobfilter";


export class ListSentimentDetectionJobsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filter" })
  filter?: SentimentDetectionJobFilter;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
