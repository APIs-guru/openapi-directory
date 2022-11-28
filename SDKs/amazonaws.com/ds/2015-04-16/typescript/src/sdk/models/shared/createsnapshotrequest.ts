import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateSnapshotRequest
/** 
 * Contains the inputs for the <a>CreateSnapshot</a> operation.
**/
export class CreateSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
