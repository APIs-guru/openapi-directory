import { SpeakeasyBase } from "../../../internal/utils";
import { DbClusterSnapshot } from "./dbclustersnapshot";
/**
 * Represents the output of <a>DescribeDBClusterSnapshots</a>.
**/
export declare class DbClusterSnapshotMessage extends SpeakeasyBase {
    dbClusterSnapshots?: DbClusterSnapshot[];
    marker?: string;
}
