import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ErrorInfo
/** 
 * Error information.
**/
export class ErrorInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}
