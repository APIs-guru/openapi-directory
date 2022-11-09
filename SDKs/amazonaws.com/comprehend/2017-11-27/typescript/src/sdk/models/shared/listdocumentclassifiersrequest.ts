import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentClassifierFilter } from "./documentclassifierfilter";


export class ListDocumentClassifiersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filter" })
  filter?: DocumentClassifierFilter;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
