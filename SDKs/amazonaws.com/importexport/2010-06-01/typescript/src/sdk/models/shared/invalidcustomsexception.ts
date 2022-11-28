import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvalidCustomsException
/** 
 * One or more customs parameters was invalid. Please correct and resubmit.
**/
export class InvalidCustomsException extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
