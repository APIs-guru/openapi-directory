import { SpeakeasyBase } from "../../../internal/utils";
import { Backup } from "./backup";
/**
 * Response object for <code>DescribeBackups</code> operation.
**/
export declare class DescribeBackupsResponse extends SpeakeasyBase {
    backups?: Backup[];
    nextToken?: string;
}
