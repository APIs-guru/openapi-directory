import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TopicsDetectionJobFilter } from "./topicsdetectionjobfilter";


export class ListTopicsDetectionJobsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filter" })
  filter?: TopicsDetectionJobFilter;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
