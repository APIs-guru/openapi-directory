import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorDetail } from "./errordetail";


// TableVersionError
/** 
 * An error record for table-version operations.
**/
export class TableVersionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorDetail" })
  errorDetail?: ErrorDetail;

  @Metadata({ data: "json, name=TableName" })
  tableName?: string;

  @Metadata({ data: "json, name=VersionId" })
  versionId?: string;
}
