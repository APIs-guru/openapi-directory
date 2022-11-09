import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ErrorDetails
/** 
 * An object containing error details.
**/
export class ErrorDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;
}
