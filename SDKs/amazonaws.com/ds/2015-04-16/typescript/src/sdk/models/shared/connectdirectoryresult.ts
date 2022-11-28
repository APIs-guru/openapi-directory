import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectDirectoryResult
/** 
 * Contains the results of the <a>ConnectDirectory</a> operation.
**/
export class ConnectDirectoryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId?: string;
}
