import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EngineVersion } from "./engineversion";
import { QueryExecutionContext } from "./queryexecutioncontext";
import { ResultConfiguration } from "./resultconfiguration";
import { StatementTypeEnum } from "./statementtypeenum";
import { QueryExecutionStatistics } from "./queryexecutionstatistics";
import { QueryExecutionStatus } from "./queryexecutionstatus";


// QueryExecution
/** 
 * Information about a single instance of a query execution.
**/
export class QueryExecution extends SpeakeasyBase {
  @Metadata({ data: "json, name=EngineVersion" })
  engineVersion?: EngineVersion;

  @Metadata({ data: "json, name=Query" })
  query?: string;

  @Metadata({ data: "json, name=QueryExecutionContext" })
  queryExecutionContext?: QueryExecutionContext;

  @Metadata({ data: "json, name=QueryExecutionId" })
  queryExecutionId?: string;

  @Metadata({ data: "json, name=ResultConfiguration" })
  resultConfiguration?: ResultConfiguration;

  @Metadata({ data: "json, name=StatementType" })
  statementType?: StatementTypeEnum;

  @Metadata({ data: "json, name=Statistics" })
  statistics?: QueryExecutionStatistics;

  @Metadata({ data: "json, name=Status" })
  status?: QueryExecutionStatus;

  @Metadata({ data: "json, name=WorkGroup" })
  workGroup?: string;
}
