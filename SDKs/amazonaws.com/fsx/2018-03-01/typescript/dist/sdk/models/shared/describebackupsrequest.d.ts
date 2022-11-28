import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
/**
 * The request object for <code>DescribeBackups</code> operation.
**/
export declare class DescribeBackupsRequest extends SpeakeasyBase {
    backupIds?: string[];
    filters?: Filter[];
    maxResults?: number;
    nextToken?: string;
}
