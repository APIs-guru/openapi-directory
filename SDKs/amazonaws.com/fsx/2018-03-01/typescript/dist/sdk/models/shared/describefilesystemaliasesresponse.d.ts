import { SpeakeasyBase } from "../../../internal/utils";
import { Alias } from "./alias";
/**
 * The response object for <code>DescribeFileSystemAliases</code> operation.
**/
export declare class DescribeFileSystemAliasesResponse extends SpeakeasyBase {
    aliases?: Alias[];
    nextToken?: string;
}
