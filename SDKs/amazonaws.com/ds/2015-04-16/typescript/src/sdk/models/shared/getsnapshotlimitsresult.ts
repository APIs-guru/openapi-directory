import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SnapshotLimits } from "./snapshotlimits";


// GetSnapshotLimitsResult
/** 
 * Contains the results of the <a>GetSnapshotLimits</a> operation.
**/
export class GetSnapshotLimitsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=SnapshotLimits" })
  snapshotLimits?: SnapshotLimits;
}
