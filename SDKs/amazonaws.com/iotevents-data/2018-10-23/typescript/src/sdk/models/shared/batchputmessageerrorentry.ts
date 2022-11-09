import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorCodeEnum } from "./errorcodeenum";


// BatchPutMessageErrorEntry
/** 
 * Contains information about the errors encountered.
**/
export class BatchPutMessageErrorEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorCode" })
  errorCode?: ErrorCodeEnum;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=messageId" })
  messageId?: string;
}
