import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReleaseLabelFilter } from "./releaselabelfilter";



export class ListReleaseLabelsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters" })
  filters?: ReleaseLabelFilter;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
