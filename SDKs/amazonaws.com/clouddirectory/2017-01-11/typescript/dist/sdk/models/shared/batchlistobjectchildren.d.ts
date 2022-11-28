import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectReference } from "./objectreference";
/**
 * Represents the output of a <a>ListObjectChildren</a> operation.
**/
export declare class BatchListObjectChildren extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    objectReference: ObjectReference;
}
