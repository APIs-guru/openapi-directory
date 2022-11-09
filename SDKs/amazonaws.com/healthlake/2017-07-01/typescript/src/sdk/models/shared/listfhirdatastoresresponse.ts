import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatastoreProperties } from "./datastoreproperties";


export class ListFhirDatastoresResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatastorePropertiesList", elemType: shared.DatastoreProperties })
  datastorePropertiesList: DatastoreProperties[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
