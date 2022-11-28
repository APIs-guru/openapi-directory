import { SpeakeasyBase } from "../../../internal/utils";
import { BatchReadException } from "./batchreadexception";
import { BatchReadSuccessfulResponse } from "./batchreadsuccessfulresponse";
/**
 * Represents the output of a <code>BatchRead</code> response operation.
**/
export declare class BatchReadOperationResponse extends SpeakeasyBase {
    exceptionResponse?: BatchReadException;
    successfulResponse?: BatchReadSuccessfulResponse;
}
