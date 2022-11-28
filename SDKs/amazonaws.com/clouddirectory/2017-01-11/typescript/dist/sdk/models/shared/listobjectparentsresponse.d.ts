import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectIdentifierAndLinkNameTuple } from "./objectidentifierandlinknametuple";
export declare class ListObjectParentsResponse extends SpeakeasyBase {
    nextToken?: string;
    parentLinks?: ObjectIdentifierAndLinkNameTuple[];
    parents?: Map<string, string>;
}
