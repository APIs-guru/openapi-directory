import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MissingParameterException
/** 
 * One or more required parameters was missing from the request.
**/
export class MissingParameterException extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
