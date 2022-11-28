import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectReference } from "./objectreference";
import { SchemaFacet } from "./schemafacet";
/**
 * A batch operation to remove a facet from an object.
**/
export declare class BatchRemoveFacetFromObject extends SpeakeasyBase {
    objectReference: ObjectReference;
    schemaFacet: SchemaFacet;
}
