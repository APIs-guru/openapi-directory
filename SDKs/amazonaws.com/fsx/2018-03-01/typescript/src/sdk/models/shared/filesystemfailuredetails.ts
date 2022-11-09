import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FileSystemFailureDetails
/** 
 * A structure providing details of any failures that occur when creating the file system has failed.
**/
export class FileSystemFailureDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
