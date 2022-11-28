import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectIdentifierAndLinkNameTuple } from "./objectidentifierandlinknametuple";
/**
 * Represents the output of a <a>ListObjectParents</a> response operation.
**/
export declare class BatchListObjectParentsResponse extends SpeakeasyBase {
    nextToken?: string;
    parentLinks?: ObjectIdentifierAndLinkNameTuple[];
}
