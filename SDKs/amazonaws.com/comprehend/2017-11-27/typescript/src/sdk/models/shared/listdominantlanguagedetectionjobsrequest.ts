import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DominantLanguageDetectionJobFilter } from "./dominantlanguagedetectionjobfilter";



export class ListDominantLanguageDetectionJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filter" })
  filter?: DominantLanguageDetectionJobFilter;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
