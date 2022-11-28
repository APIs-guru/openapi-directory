import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SentimentDetectionJobFilter } from "./sentimentdetectionjobfilter";



export class ListSentimentDetectionJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filter" })
  filter?: SentimentDetectionJobFilter;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
