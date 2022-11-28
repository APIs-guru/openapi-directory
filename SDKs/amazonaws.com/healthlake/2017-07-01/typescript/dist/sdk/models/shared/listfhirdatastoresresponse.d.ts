import { SpeakeasyBase } from "../../../internal/utils";
import { DatastoreProperties } from "./datastoreproperties";
export declare class ListFhirDatastoresResponse extends SpeakeasyBase {
    datastorePropertiesList: DatastoreProperties[];
    nextToken?: string;
}
