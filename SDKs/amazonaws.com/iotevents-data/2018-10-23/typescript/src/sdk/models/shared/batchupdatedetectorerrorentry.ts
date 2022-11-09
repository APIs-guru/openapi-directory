import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorCodeEnum } from "./errorcodeenum";


// BatchUpdateDetectorErrorEntry
/** 
 * Information about the error that occurred when attempting to update a detector.
**/
export class BatchUpdateDetectorErrorEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorCode" })
  errorCode?: ErrorCodeEnum;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=messageId" })
  messageId?: string;
}
