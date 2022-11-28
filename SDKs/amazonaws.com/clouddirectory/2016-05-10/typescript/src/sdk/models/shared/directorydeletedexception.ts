import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DirectoryDeletedException
/** 
 * A directory that has been deleted and to which access has been attempted. Note: The requested resource will eventually cease to exist.
**/
export class DirectoryDeletedException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
