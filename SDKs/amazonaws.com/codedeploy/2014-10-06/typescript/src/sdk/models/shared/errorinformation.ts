import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorCodeEnum } from "./errorcodeenum";


// ErrorInformation
/** 
 * Information about a deployment error.
**/
export class ErrorInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: ErrorCodeEnum;

  @Metadata({ data: "json, name=message" })
  message?: string;
}
