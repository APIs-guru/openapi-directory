import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UnprocessedQueryExecutionId
/** 
 * Describes a query execution that failed to process.
**/
export class UnprocessedQueryExecutionId extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=QueryExecutionId" })
  queryExecutionId?: string;
}
