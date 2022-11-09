import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatastoreProperties } from "./datastoreproperties";


export class DescribeFhirDatastoreResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatastoreProperties" })
  datastoreProperties: DatastoreProperties;
}
