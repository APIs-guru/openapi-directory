import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MissingManifestFieldException
/** 
 * One or more required fields were missing from the manifest file. Please correct and resubmit.
**/
export class MissingManifestFieldException extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
