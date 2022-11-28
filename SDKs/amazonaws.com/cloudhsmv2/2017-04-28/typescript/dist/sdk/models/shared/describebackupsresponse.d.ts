import { SpeakeasyBase } from "../../../internal/utils";
import { Backup } from "./backup";
export declare class DescribeBackupsResponse extends SpeakeasyBase {
    backups?: Backup[];
    nextToken?: string;
}
