import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorCategoryEnum } from "./errorcategoryenum";



// ErrorInfo
/** 
 * Error message.
**/
export class ErrorInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorCategory" })
  errorCategory?: ErrorCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;
}
