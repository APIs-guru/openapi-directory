import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DirectoryServiceAuthentication
/** 
 * Describes an Active Directory.
**/
export class DirectoryServiceAuthentication extends SpeakeasyBase {
  @SpeakeasyMetadata()
  directoryId?: string;
}
