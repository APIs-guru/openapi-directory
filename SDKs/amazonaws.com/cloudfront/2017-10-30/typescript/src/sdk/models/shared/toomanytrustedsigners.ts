import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TooManyTrustedSigners
/** 
 * Your request contains more trusted signers than are allowed per distribution.
**/
export class TooManyTrustedSigners extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
