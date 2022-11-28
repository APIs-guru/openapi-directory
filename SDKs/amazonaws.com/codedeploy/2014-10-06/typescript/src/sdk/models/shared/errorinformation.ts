import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";



// ErrorInformation
/** 
 * Information about a deployment error.
**/
export class ErrorInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: ErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
