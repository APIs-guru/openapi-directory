import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateSnapshotResult
/** 
 * Contains the results of the <a>CreateSnapshot</a> operation.
**/
export class CreateSnapshotResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=SnapshotId" })
  snapshotId?: string;
}
