import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateSnapshotResult
/** 
 * Contains the results of the <a>CreateSnapshot</a> operation.
**/
export class CreateSnapshotResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SnapshotId" })
  snapshotId?: string;
}
