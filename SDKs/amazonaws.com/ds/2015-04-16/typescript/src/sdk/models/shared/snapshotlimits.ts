import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SnapshotLimits
/** 
 * Contains manual snapshot limit information for a directory.
**/
export class SnapshotLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=ManualSnapshotsCurrentCount" })
  manualSnapshotsCurrentCount?: number;

  @Metadata({ data: "json, name=ManualSnapshotsLimit" })
  manualSnapshotsLimit?: number;

  @Metadata({ data: "json, name=ManualSnapshotsLimitReached" })
  manualSnapshotsLimitReached?: boolean;
}
