import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KeyPhrasesDetectionJobFilter } from "./keyphrasesdetectionjobfilter";


export class ListKeyPhrasesDetectionJobsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filter" })
  filter?: KeyPhrasesDetectionJobFilter;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
