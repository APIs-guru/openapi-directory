import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvalidAddressException
/** 
 * The address specified in the manifest is invalid.
**/
export class InvalidAddressException extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
