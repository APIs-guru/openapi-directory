import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request object for <code>DescribeFileSystems</code> operation.
**/
export declare class DescribeFileSystemsRequest extends SpeakeasyBase {
    fileSystemIds?: string[];
    maxResults?: number;
    nextToken?: string;
}
