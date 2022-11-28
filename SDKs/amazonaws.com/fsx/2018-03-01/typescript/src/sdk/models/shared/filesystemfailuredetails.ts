import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FileSystemFailureDetails
/** 
 * A structure providing details of any failures that occur when creating the file system has failed.
**/
export class FileSystemFailureDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
