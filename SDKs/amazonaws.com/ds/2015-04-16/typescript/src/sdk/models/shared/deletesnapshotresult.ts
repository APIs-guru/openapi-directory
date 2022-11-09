import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteSnapshotResult
/** 
 * Contains the results of the <a>DeleteSnapshot</a> operation.
**/
export class DeleteSnapshotResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=SnapshotId" })
  snapshotId?: string;
}
