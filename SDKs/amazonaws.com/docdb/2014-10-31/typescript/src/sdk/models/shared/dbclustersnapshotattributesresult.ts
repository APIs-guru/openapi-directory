import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbClusterSnapshotAttribute } from "./dbclustersnapshotattribute";



// DbClusterSnapshotAttributesResult
/** 
 * Detailed information about the attributes that are associated with a cluster snapshot.
**/
export class DbClusterSnapshotAttributesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbClusterSnapshotAttribute })
  dbClusterSnapshotAttributes?: DbClusterSnapshotAttribute[];

  @SpeakeasyMetadata()
  dbClusterSnapshotIdentifier?: string;
}
