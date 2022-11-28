import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RestoreFromSnapshotRequest
/** 
 * An object representing the inputs for the <a>RestoreFromSnapshot</a> operation.
**/
export class RestoreFromSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SnapshotId" })
  snapshotId: string;
}
