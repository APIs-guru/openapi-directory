import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbClusterSnapshot } from "./dbclustersnapshot";



// DbClusterSnapshotMessage
/** 
 * Represents the output of <a>DescribeDBClusterSnapshots</a>.
**/
export class DbClusterSnapshotMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbClusterSnapshot })
  dbClusterSnapshots?: DbClusterSnapshot[];

  @SpeakeasyMetadata()
  marker?: string;
}
