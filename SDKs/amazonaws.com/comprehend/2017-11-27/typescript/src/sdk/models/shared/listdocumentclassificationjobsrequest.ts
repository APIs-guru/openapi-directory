import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentClassificationJobFilter } from "./documentclassificationjobfilter";



export class ListDocumentClassificationJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filter" })
  filter?: DocumentClassificationJobFilter;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
