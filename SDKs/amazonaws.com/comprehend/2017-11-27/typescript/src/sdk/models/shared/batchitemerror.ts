import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchItemError
/** 
 * Describes an error that occurred while processing a document in a batch. The operation returns on <code>BatchItemError</code> object for each document that contained an error.
**/
export class BatchItemError extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=Index" })
  index?: number;
}
