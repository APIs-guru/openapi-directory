import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchDeleteImportDataError } from "./batchdeleteimportdataerror";



export class BatchDeleteImportDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: BatchDeleteImportDataError })
  errors?: BatchDeleteImportDataError[];
}
