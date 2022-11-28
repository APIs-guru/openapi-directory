import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchItemError
/** 
 * Describes an error that occurred while processing a document in a batch. The operation returns on <code>BatchItemError</code> object for each document that contained an error.
**/
export class BatchItemError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=Index" })
  index?: number;
}
