import { SpeakeasyBase } from "../../../internal/utils";
import { FunctionSummary } from "./functionsummary";
/**
 * Contains the result of testing a CloudFront function with <code>TestFunction</code>.
**/
export declare class TestResult extends SpeakeasyBase {
    computeUtilization?: string;
    functionErrorMessage?: string;
    functionExecutionLogs?: string[];
    functionOutput?: string;
    functionSummary?: FunctionSummary;
}
