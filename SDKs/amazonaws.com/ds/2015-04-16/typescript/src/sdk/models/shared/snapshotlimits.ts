import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SnapshotLimits
/** 
 * Contains manual snapshot limit information for a directory.
**/
export class SnapshotLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ManualSnapshotsCurrentCount" })
  manualSnapshotsCurrentCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ManualSnapshotsLimit" })
  manualSnapshotsLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=ManualSnapshotsLimitReached" })
  manualSnapshotsLimitReached?: boolean;
}
