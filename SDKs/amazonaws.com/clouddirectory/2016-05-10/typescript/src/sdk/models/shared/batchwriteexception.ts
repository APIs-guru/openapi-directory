import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchWriteExceptionTypeEnum } from "./batchwriteexceptiontypeenum";


// BatchWriteException
/** 
 * A <code>BatchWrite</code> exception has occurred.
**/
export class BatchWriteException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Index" })
  index?: number;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=Type" })
  type?: BatchWriteExceptionTypeEnum;
}
