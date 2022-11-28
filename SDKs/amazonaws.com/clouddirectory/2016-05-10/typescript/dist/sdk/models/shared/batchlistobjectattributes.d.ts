import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaFacet } from "./schemafacet";
import { ObjectReference } from "./objectreference";
/**
 * Represents the output of a <a>ListObjectAttributes</a> operation.
**/
export declare class BatchListObjectAttributes extends SpeakeasyBase {
    facetFilter?: SchemaFacet;
    maxResults?: number;
    nextToken?: string;
    objectReference: ObjectReference;
}
