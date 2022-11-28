import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Snapshot } from "./snapshot";



// DescribeSnapshotsListMessage
/** 
 * Represents the output of a <code>DescribeSnapshots</code> operation.
**/
export class DescribeSnapshotsListMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: Snapshot })
  snapshots?: Snapshot[];
}
