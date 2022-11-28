import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetail } from "./errordetail";



// TableVersionError
/** 
 * An error record for table-version operations.
**/
export class TableVersionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorDetail" })
  errorDetail?: ErrorDetail;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName?: string;

  @SpeakeasyMetadata({ data: "json, name=VersionId" })
  versionId?: string;
}
