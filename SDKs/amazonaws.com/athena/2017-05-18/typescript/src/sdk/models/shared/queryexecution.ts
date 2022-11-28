import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=EngineVersion" })
  engineVersion?: EngineVersion;

  @SpeakeasyMetadata({ data: "json, name=Query" })
  query?: string;

  @SpeakeasyMetadata({ data: "json, name=QueryExecutionContext" })
  queryExecutionContext?: QueryExecutionContext;

  @SpeakeasyMetadata({ data: "json, name=QueryExecutionId" })
  queryExecutionId?: string;

  @SpeakeasyMetadata({ data: "json, name=ResultConfiguration" })
  resultConfiguration?: ResultConfiguration;

  @SpeakeasyMetadata({ data: "json, name=StatementType" })
  statementType?: StatementTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Statistics" })
  statistics?: QueryExecutionStatistics;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: QueryExecutionStatus;

  @SpeakeasyMetadata({ data: "json, name=WorkGroup" })
  workGroup?: string;
}
