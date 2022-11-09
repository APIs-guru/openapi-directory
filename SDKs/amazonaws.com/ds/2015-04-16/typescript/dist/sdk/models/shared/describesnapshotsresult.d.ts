import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Snapshot } from "./snapshot";
/**
 * Contains the results of the <a>DescribeSnapshots</a> operation.
**/
export declare class DescribeSnapshotsResult extends SpeakeasyBase {
    nextToken?: string;
    snapshots?: Snapshot[];
}
