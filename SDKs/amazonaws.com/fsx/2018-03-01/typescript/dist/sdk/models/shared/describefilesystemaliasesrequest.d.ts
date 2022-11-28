import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request object for <code>DescribeFileSystemAliases</code> operation.
**/
export declare class DescribeFileSystemAliasesRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    fileSystemId: string;
    maxResults?: number;
    nextToken?: string;
}
