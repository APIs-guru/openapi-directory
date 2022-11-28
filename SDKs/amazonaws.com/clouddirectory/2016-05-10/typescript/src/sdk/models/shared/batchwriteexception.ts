import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchWriteExceptionTypeEnum } from "./batchwriteexceptiontypeenum";



// BatchWriteException
/** 
 * A <code>BatchWrite</code> exception has occurred.
**/
export class BatchWriteException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: BatchWriteExceptionTypeEnum;
}
