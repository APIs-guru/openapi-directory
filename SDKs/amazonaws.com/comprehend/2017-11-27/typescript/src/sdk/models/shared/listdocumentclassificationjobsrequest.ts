import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentClassificationJobFilter } from "./documentclassificationjobfilter";


export class ListDocumentClassificationJobsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filter" })
  filter?: DocumentClassificationJobFilter;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
