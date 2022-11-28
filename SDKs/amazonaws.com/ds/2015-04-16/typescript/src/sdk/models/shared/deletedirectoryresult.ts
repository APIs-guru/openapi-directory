import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteDirectoryResult
/** 
 * Contains the results of the <a>DeleteDirectory</a> operation.
**/
export class DeleteDirectoryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId?: string;
}
