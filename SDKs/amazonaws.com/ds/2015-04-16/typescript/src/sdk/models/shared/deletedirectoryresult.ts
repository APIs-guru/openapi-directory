import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteDirectoryResult
/** 
 * Contains the results of the <a>DeleteDirectory</a> operation.
**/
export class DeleteDirectoryResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId?: string;
}
