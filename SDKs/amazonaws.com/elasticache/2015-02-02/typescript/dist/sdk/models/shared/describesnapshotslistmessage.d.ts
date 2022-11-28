import { SpeakeasyBase } from "../../../internal/utils";
import { Snapshot } from "./snapshot";
/**
 * Represents the output of a <code>DescribeSnapshots</code> operation.
**/
export declare class DescribeSnapshotsListMessage extends SpeakeasyBase {
    marker?: string;
    snapshots?: Snapshot[];
}
