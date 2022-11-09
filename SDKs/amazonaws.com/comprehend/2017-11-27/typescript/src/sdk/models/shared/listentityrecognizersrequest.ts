import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EntityRecognizerFilter } from "./entityrecognizerfilter";


export class ListEntityRecognizersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filter" })
  filter?: EntityRecognizerFilter;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
