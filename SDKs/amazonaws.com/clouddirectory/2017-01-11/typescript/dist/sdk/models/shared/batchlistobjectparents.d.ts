import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectReference } from "./objectreference";
/**
 * Lists parent objects that are associated with a given object in pagination fashion.
**/
export declare class BatchListObjectParents extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    objectReference: ObjectReference;
}
