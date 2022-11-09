import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchDeleteImportDataError } from "./batchdeleteimportdataerror";


export class BatchDeleteImportDataResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.BatchDeleteImportDataError })
  errors?: BatchDeleteImportDataError[];
}
