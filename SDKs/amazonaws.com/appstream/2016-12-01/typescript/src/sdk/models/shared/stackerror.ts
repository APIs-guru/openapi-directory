import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StackErrorCodeEnum } from "./stackerrorcodeenum";


// StackError
/** 
 * Describes a stack error.
**/
export class StackError extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: StackErrorCodeEnum;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;
}
