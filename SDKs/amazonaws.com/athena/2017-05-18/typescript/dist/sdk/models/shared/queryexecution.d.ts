import { SpeakeasyBase } from "../../../internal/utils";
import { EngineVersion } from "./engineversion";
import { QueryExecutionContext } from "./queryexecutioncontext";
import { ResultConfiguration } from "./resultconfiguration";
import { StatementTypeEnum } from "./statementtypeenum";
import { QueryExecutionStatistics } from "./queryexecutionstatistics";
import { QueryExecutionStatus } from "./queryexecutionstatus";
/**
 * Information about a single instance of a query execution.
**/
export declare class QueryExecution extends SpeakeasyBase {
    engineVersion?: EngineVersion;
    query?: string;
    queryExecutionContext?: QueryExecutionContext;
    queryExecutionId?: string;
    resultConfiguration?: ResultConfiguration;
    statementType?: StatementTypeEnum;
    statistics?: QueryExecutionStatistics;
    status?: QueryExecutionStatus;
    workGroup?: string;
}
