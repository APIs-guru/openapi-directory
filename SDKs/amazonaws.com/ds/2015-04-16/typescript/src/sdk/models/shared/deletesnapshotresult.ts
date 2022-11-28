import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteSnapshotResult
/** 
 * Contains the results of the <a>DeleteSnapshot</a> operation.
**/
export class DeleteSnapshotResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SnapshotId" })
  snapshotId?: string;
}
