import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UnprocessedQueryExecutionId
/** 
 * Describes a query execution that failed to process.
**/
export class UnprocessedQueryExecutionId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=QueryExecutionId" })
  queryExecutionId?: string;
}
