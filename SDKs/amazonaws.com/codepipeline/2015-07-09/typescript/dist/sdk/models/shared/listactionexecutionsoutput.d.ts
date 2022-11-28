import { SpeakeasyBase } from "../../../internal/utils";
import { ActionExecutionDetail } from "./actionexecutiondetail";
export declare class ListActionExecutionsOutput extends SpeakeasyBase {
    actionExecutionDetails?: ActionExecutionDetail[];
    nextToken?: string;
}
