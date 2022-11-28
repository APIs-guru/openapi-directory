import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvalidManifestFieldException
/** 
 * One or more manifest fields was invalid. Please correct and resubmit.
**/
export class InvalidManifestFieldException extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
