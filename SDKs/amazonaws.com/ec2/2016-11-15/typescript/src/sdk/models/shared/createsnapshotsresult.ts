import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SnapshotInfo } from "./snapshotinfo";



export class CreateSnapshotsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: SnapshotInfo })
  snapshots?: SnapshotInfo[];
}
