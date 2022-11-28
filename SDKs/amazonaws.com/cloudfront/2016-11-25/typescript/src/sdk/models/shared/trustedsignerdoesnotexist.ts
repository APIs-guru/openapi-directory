import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrustedSignerDoesNotExist
/** 
 * One or more of your trusted signers do not exist.
**/
export class TrustedSignerDoesNotExist extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
