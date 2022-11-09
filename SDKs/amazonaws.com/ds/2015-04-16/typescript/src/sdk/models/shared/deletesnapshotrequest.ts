import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteSnapshotRequest
/** 
 * Contains the inputs for the <a>DeleteSnapshot</a> operation.
**/
export class DeleteSnapshotRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=SnapshotId" })
  snapshotId: string;
}
