import { SpeakeasyBase } from "../../../internal/utils";
import { FileSystem } from "./filesystem";
/**
 * The response object for <code>DescribeFileSystems</code> operation.
**/
export declare class DescribeFileSystemsResponse extends SpeakeasyBase {
    fileSystems?: FileSystem[];
    nextToken?: string;
}
