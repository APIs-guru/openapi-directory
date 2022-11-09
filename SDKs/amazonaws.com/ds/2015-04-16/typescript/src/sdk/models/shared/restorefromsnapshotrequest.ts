import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RestoreFromSnapshotRequest
/** 
 * An object representing the inputs for the <a>RestoreFromSnapshot</a> operation.
**/
export class RestoreFromSnapshotRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=SnapshotId" })
  snapshotId: string;
}
