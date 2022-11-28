import { SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";
import { ProblemDetail } from "./problemdetail";
import { ExecutionResultEnum } from "./executionresultenum";
/**
 * Represents a specific warning or failure.
**/
export declare class Problem extends SpeakeasyBase {
    device?: Device;
    job?: ProblemDetail;
    message?: string;
    result?: ExecutionResultEnum;
    run?: ProblemDetail;
    suite?: ProblemDetail;
    test?: ProblemDetail;
}
