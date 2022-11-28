import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FailureException
/** 
 * Represents a failure a contributor insights operation.
**/
export class FailureException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExceptionDescription" })
  exceptionDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ExceptionName" })
  exceptionName?: string;
}
