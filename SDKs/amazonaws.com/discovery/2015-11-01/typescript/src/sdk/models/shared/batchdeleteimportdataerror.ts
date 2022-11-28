import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchDeleteImportDataErrorCodeEnum } from "./batchdeleteimportdataerrorcodeenum";



// BatchDeleteImportDataError
/** 
 * Error messages returned for each import task that you deleted as a response for this command.
**/
export class BatchDeleteImportDataError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: BatchDeleteImportDataErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=importTaskId" })
  importTaskId?: string;
}
