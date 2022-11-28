import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteSnapshotRequest
/** 
 * Contains the inputs for the <a>DeleteSnapshot</a> operation.
**/
export class DeleteSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SnapshotId" })
  snapshotId: string;
}
