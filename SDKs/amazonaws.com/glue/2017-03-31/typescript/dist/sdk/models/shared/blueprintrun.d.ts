import { SpeakeasyBase } from "../../../internal/utils";
import { BlueprintRunStateEnum } from "./blueprintrunstateenum";
/**
 * The details of a blueprint run.
**/
export declare class BlueprintRun extends SpeakeasyBase {
    blueprintName?: string;
    completedOn?: Date;
    errorMessage?: string;
    parameters?: string;
    roleArn?: string;
    rollbackErrorMessage?: string;
    runId?: string;
    startedOn?: Date;
    state?: BlueprintRunStateEnum;
    workflowName?: string;
}
