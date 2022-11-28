import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectAttributeUpdate } from "./objectattributeupdate";
import { ObjectReference } from "./objectreference";
/**
 * Represents the output of a <code>BatchUpdate</code> operation.
**/
export declare class BatchUpdateObjectAttributes extends SpeakeasyBase {
    attributeUpdates: ObjectAttributeUpdate[];
    objectReference: ObjectReference;
}
