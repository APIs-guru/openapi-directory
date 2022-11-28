import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyPhrasesDetectionJobFilter } from "./keyphrasesdetectionjobfilter";



export class ListKeyPhrasesDetectionJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filter" })
  filter?: KeyPhrasesDetectionJobFilter;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
