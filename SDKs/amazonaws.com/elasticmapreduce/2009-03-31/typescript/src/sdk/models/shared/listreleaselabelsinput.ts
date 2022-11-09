import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReleaseLabelFilter } from "./releaselabelfilter";


export class ListReleaseLabelsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters" })
  filters?: ReleaseLabelFilter;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
