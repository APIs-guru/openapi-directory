import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a query execution that failed to process.
**/
export declare class UnprocessedQueryExecutionId extends SpeakeasyBase {
    errorCode?: string;
    errorMessage?: string;
    queryExecutionId?: string;
}
