import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectReference } from "./objectreference";
import { SchemaFacet } from "./schemafacet";
/**
 * Retrieves attributes within a facet that are associated with an object inside an <a>BatchRead</a> operation. For more information, see <a>GetObjectAttributes</a> and <a>BatchReadRequest$Operations</a>.
**/
export declare class BatchGetObjectAttributes extends SpeakeasyBase {
    attributeNames: string[];
    objectReference: ObjectReference;
    schemaFacet: SchemaFacet;
}
