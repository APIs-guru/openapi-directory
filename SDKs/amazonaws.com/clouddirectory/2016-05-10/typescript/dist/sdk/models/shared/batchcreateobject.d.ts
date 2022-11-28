import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeKeyAndValue } from "./attributekeyandvalue";
import { ObjectReference } from "./objectreference";
import { SchemaFacet } from "./schemafacet";
/**
 * Represents the output of a <a>CreateObject</a> operation.
**/
export declare class BatchCreateObject extends SpeakeasyBase {
    batchReferenceName?: string;
    linkName?: string;
    objectAttributeList: AttributeKeyAndValue[];
    parentReference?: ObjectReference;
    schemaFacet: SchemaFacet[];
}
