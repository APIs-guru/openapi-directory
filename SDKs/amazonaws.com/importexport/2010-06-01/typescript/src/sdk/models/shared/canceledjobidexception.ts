import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CanceledJobIdException
/** 
 * The specified job ID has been canceled and is no longer valid.
**/
export class CanceledJobIdException extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
