import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteDirectoryRequest
/** 
 * Contains the inputs for the <a>DeleteDirectory</a> operation.
**/
export class DeleteDirectoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;
}
