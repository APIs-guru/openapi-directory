import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateDirectoryResult
/** 
 * Contains the results of the <a>CreateDirectory</a> operation.
**/
export class CreateDirectoryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId?: string;
}
