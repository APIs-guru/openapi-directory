import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TopicsDetectionJobFilter } from "./topicsdetectionjobfilter";



export class ListTopicsDetectionJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filter" })
  filter?: TopicsDetectionJobFilter;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
