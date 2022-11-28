import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeKeyAndValue } from "./attributekeyandvalue";
import { ObjectReference } from "./objectreference";
import { SchemaFacet } from "./schemafacet";
/**
 * Represents the output of a batch add facet to object operation.
**/
export declare class BatchAddFacetToObject extends SpeakeasyBase {
    objectAttributeList: AttributeKeyAndValue[];
    objectReference: ObjectReference;
    schemaFacet: SchemaFacet;
}
