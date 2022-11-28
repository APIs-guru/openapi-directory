import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";



// BatchUpdateDetectorErrorEntry
/** 
 * Information about the error that occurred when attempting to update a detector.
**/
export class BatchUpdateDetectorErrorEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: ErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=messageId" })
  messageId?: string;
}
