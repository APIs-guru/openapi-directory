import { SpeakeasyBase } from "../../../internal/utils";
import { QueryExecutionContext } from "./queryexecutioncontext";
import { ResultConfiguration } from "./resultconfiguration";
export declare class StartQueryExecutionInput extends SpeakeasyBase {
    clientRequestToken?: string;
    queryExecutionContext?: QueryExecutionContext;
    queryString: string;
    resultConfiguration?: ResultConfiguration;
    workGroup?: string;
}
