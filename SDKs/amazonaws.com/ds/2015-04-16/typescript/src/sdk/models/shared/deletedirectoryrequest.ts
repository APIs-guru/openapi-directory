import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteDirectoryRequest
/** 
 * Contains the inputs for the <a>DeleteDirectory</a> operation.
**/
export class DeleteDirectoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;
}
