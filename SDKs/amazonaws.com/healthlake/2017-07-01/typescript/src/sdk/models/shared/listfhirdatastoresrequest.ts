import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatastoreFilter } from "./datastorefilter";


export class ListFhirDatastoresRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filter" })
  filter?: DatastoreFilter;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
