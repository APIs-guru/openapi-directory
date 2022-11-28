import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ErrorInfo
/** 
 * Error information.
**/
export class ErrorInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
