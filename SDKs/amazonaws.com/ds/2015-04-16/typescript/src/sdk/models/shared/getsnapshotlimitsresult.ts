import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SnapshotLimits } from "./snapshotlimits";



// GetSnapshotLimitsResult
/** 
 * Contains the results of the <a>GetSnapshotLimits</a> operation.
**/
export class GetSnapshotLimitsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SnapshotLimits" })
  snapshotLimits?: SnapshotLimits;
}
