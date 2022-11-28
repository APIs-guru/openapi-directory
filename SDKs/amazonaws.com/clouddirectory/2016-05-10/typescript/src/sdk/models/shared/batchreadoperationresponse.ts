import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchReadException } from "./batchreadexception";
import { BatchReadSuccessfulResponse } from "./batchreadsuccessfulresponse";



// BatchReadOperationResponse
/** 
 * Represents the output of a <code>BatchRead</code> response operation.
**/
export class BatchReadOperationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExceptionResponse" })
  exceptionResponse?: BatchReadException;

  @SpeakeasyMetadata({ data: "json, name=SuccessfulResponse" })
  successfulResponse?: BatchReadSuccessfulResponse;
}
