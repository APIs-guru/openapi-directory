import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DominantLanguageDetectionJobFilter } from "./dominantlanguagedetectionjobfilter";


export class ListDominantLanguageDetectionJobsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filter" })
  filter?: DominantLanguageDetectionJobFilter;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
