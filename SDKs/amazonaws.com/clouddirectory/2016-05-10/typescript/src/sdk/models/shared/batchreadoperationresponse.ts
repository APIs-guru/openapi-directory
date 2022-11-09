import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchReadException } from "./batchreadexception";
import { BatchReadSuccessfulResponse } from "./batchreadsuccessfulresponse";


// BatchReadOperationResponse
/** 
 * Represents the output of a <code>BatchRead</code> response operation.
**/
export class BatchReadOperationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExceptionResponse" })
  exceptionResponse?: BatchReadException;

  @Metadata({ data: "json, name=SuccessfulResponse" })
  successfulResponse?: BatchReadSuccessfulResponse;
}
