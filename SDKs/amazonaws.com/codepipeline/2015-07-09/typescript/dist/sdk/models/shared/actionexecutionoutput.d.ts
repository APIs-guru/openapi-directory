import { SpeakeasyBase } from "../../../internal/utils";
import { ActionExecutionResult } from "./actionexecutionresult";
import { ArtifactDetail } from "./artifactdetail";
/**
 * Output details listed for an action execution, such as the action execution result.
**/
export declare class ActionExecutionOutput extends SpeakeasyBase {
    executionResult?: ActionExecutionResult;
    outputArtifacts?: ArtifactDetail[];
    outputVariables?: Map<string, string>;
}
