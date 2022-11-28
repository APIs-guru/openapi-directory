import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ErrorDetails
/** 
 * An object containing error details.
**/
export class ErrorDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;
}
