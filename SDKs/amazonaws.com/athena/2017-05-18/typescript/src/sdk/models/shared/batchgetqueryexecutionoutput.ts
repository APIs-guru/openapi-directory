import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { QueryExecution } from "./queryexecution";
import { UnprocessedQueryExecutionId } from "./unprocessedqueryexecutionid";


export class BatchGetQueryExecutionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=QueryExecutions", elemType: shared.QueryExecution })
  queryExecutions?: QueryExecution[];

  @Metadata({ data: "json, name=UnprocessedQueryExecutionIds", elemType: shared.UnprocessedQueryExecutionId })
  unprocessedQueryExecutionIds?: UnprocessedQueryExecutionId[];
}
