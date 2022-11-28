import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvalidFileSystemException
/** 
 * File system specified in export manifest is invalid.
**/
export class InvalidFileSystemException extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
