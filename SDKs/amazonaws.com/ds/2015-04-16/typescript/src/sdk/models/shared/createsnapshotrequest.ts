import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateSnapshotRequest
/** 
 * Contains the inputs for the <a>CreateSnapshot</a> operation.
**/
export class CreateSnapshotRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
