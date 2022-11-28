import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetSnapshotLimitsRequest
/** 
 * Contains the inputs for the <a>GetSnapshotLimits</a> operation.
**/
export class GetSnapshotLimitsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;
}
