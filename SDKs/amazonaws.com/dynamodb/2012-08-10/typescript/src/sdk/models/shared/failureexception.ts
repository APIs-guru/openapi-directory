import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FailureException
/** 
 * Represents a failure a contributor insights operation.
**/
export class FailureException extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExceptionDescription" })
  exceptionDescription?: string;

  @Metadata({ data: "json, name=ExceptionName" })
  exceptionName?: string;
}
