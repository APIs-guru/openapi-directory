import { SpeakeasyBase } from "../../../internal/utils";
import { DbClusterSnapshotAttribute } from "./dbclustersnapshotattribute";
/**
 * Detailed information about the attributes that are associated with a cluster snapshot.
**/
export declare class DbClusterSnapshotAttributesResult extends SpeakeasyBase {
    dbClusterSnapshotAttributes?: DbClusterSnapshotAttribute[];
    dbClusterSnapshotIdentifier?: string;
}
