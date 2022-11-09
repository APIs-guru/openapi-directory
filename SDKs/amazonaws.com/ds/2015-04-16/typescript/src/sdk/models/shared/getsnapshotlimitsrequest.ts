import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetSnapshotLimitsRequest
/** 
 * Contains the inputs for the <a>GetSnapshotLimits</a> operation.
**/
export class GetSnapshotLimitsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;
}
