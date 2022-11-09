import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RetryableConflictException
/** 
 * Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.
**/
export class RetryableConflictException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
