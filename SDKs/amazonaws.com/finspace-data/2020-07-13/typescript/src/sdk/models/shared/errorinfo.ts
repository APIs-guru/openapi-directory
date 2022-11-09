import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorCategoryEnum } from "./errorcategoryenum";


// ErrorInfo
/** 
 * Error message.
**/
export class ErrorInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorCategory" })
  errorCategory?: ErrorCategoryEnum;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;
}
