import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the output of a <a>ListObjectChildren</a> response operation.
**/
export declare class BatchListObjectChildrenResponse extends SpeakeasyBase {
    children?: Map<string, string>;
    nextToken?: string;
}
