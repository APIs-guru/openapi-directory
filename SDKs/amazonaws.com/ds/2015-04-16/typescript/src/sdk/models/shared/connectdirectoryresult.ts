import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConnectDirectoryResult
/** 
 * Contains the results of the <a>ConnectDirectory</a> operation.
**/
export class ConnectDirectoryResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId?: string;
}
