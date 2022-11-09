import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FailedItemErrorCodeEnum } from "./faileditemerrorcodeenum";


// FailedItemDetails
/** 
 * Includes details about the failed items.
**/
export class FailedItemDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=failureCode" })
  failureCode: FailedItemErrorCodeEnum;

  @Metadata({ data: "json, name=retryable" })
  retryable: boolean;
}
