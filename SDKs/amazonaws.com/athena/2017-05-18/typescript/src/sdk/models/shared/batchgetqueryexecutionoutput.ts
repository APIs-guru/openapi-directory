import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryExecution } from "./queryexecution";
import { UnprocessedQueryExecutionId } from "./unprocessedqueryexecutionid";



export class BatchGetQueryExecutionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=QueryExecutions", elemType: QueryExecution })
  queryExecutions?: QueryExecution[];

  @SpeakeasyMetadata({ data: "json, name=UnprocessedQueryExecutionIds", elemType: UnprocessedQueryExecutionId })
  unprocessedQueryExecutionIds?: UnprocessedQueryExecutionId[];
}
