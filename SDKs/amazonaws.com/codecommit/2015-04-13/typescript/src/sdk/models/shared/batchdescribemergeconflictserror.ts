import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchDescribeMergeConflictsError
/** 
 * Returns information about errors in a BatchDescribeMergeConflicts operation.
**/
export class BatchDescribeMergeConflictsError extends SpeakeasyBase {
  @Metadata({ data: "json, name=exceptionName" })
  exceptionName: string;

  @Metadata({ data: "json, name=filePath" })
  filePath: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}
