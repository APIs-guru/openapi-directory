import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StackErrorCodeEnum } from "./stackerrorcodeenum";



// StackError
/** 
 * Describes a stack error.
**/
export class StackError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: StackErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;
}
