import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchReadExceptionTypeEnum } from "./batchreadexceptiontypeenum";


// BatchReadException
/** 
 * The batch read exception structure, which contains the exception type and message.
**/
export class BatchReadException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=Type" })
  type?: BatchReadExceptionTypeEnum;
}
