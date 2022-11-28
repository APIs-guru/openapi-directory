import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatastoreFilter } from "./datastorefilter";



export class ListFhirDatastoresRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filter" })
  filter?: DatastoreFilter;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
