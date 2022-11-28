import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrustedSignerDoesNotExist
/** 
 * One or more of your trusted signers don't exist.
**/
export class TrustedSignerDoesNotExist extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
