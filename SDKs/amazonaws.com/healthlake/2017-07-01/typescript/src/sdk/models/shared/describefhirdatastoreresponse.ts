import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatastoreProperties } from "./datastoreproperties";



export class DescribeFhirDatastoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatastoreProperties" })
  datastoreProperties: DatastoreProperties;
}
