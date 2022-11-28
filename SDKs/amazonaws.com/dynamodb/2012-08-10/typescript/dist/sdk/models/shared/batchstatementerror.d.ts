import { SpeakeasyBase } from "../../../internal/utils";
import { BatchStatementErrorCodeEnumEnum } from "./batchstatementerrorcodeenumenum";
/**
 *  An error associated with a statement in a PartiQL batch that was run.
**/
export declare class BatchStatementError extends SpeakeasyBase {
    code?: BatchStatementErrorCodeEnumEnum;
    message?: string;
}
