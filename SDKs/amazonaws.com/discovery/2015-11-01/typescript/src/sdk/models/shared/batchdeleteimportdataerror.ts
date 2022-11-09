import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchDeleteImportDataErrorCodeEnum } from "./batchdeleteimportdataerrorcodeenum";


// BatchDeleteImportDataError
/** 
 * Error messages returned for each import task that you deleted as a response for this command.
**/
export class BatchDeleteImportDataError extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorCode" })
  errorCode?: BatchDeleteImportDataErrorCodeEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: string;

  @Metadata({ data: "json, name=importTaskId" })
  importTaskId?: string;
}
