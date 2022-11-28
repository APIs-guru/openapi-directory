import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatastoreProperties } from "./datastoreproperties";



export class ListFhirDatastoresResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatastorePropertiesList", elemType: DatastoreProperties })
  datastorePropertiesList: DatastoreProperties[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
