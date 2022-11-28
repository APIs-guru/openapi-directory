import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbClusterSnapshot } from "./dbclustersnapshot";



export class CopyDbClusterSnapshotResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbClusterSnapshot?: DbClusterSnapshot;
}
