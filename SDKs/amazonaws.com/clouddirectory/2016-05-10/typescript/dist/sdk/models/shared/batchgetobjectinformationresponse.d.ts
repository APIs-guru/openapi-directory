import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaFacet } from "./schemafacet";
/**
 * Represents the output of a <a>GetObjectInformation</a> response operation.
**/
export declare class BatchGetObjectInformationResponse extends SpeakeasyBase {
    objectIdentifier?: string;
    schemaFacets?: SchemaFacet[];
}
