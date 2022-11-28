import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BaseException
/** 
 * An error occurred while processing the request.
**/
export class BaseException extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: string;

  @SpeakeasyMetadata()
  message?: string;
}
