import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchReadExceptionTypeEnum } from "./batchreadexceptiontypeenum";



// BatchReadException
/** 
 * The batch read exception structure, which contains the exception type and message.
**/
export class BatchReadException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: BatchReadExceptionTypeEnum;
}
