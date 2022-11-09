import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateDirectoryResult
/** 
 * Contains the results of the <a>CreateDirectory</a> operation.
**/
export class CreateDirectoryResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId?: string;
}
