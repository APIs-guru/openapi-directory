import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchDescribeMergeConflictsError
/** 
 * Returns information about errors in a BatchDescribeMergeConflicts operation.
**/
export class BatchDescribeMergeConflictsError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exceptionName" })
  exceptionName: string;

  @SpeakeasyMetadata({ data: "json, name=filePath" })
  filePath: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}
