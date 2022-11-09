import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorCodeEnum } from "./errorcodeenum";


// ErrorDetail
/** 
 * An object representing an error when an asynchronous operation fails.
**/
export class ErrorDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorCode" })
  errorCode?: ErrorCodeEnum;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=resourceIds" })
  resourceIds?: string[];
}
