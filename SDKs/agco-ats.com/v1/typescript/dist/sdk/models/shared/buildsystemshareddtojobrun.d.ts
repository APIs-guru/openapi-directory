import { SpeakeasyBase } from "../../../internal/utils";
import { BuildSystemSharedDtoActivityRun } from "./buildsystemshareddtoactivityrun";
import { BuildSystemSharedDtoParameterValue } from "./buildsystemshareddtoparametervalue";
export declare enum BuildSystemSharedDtoJobRunStatusEnum {
    Ready = "Ready",
    InProgress = "InProgress",
    Succeeded = "Succeeded",
    Cancelled = "Cancelled",
    Failed = "Failed"
}
/**
 * A DTO for an IJobRun
**/
export declare class BuildSystemSharedDtoJobRunInput extends SpeakeasyBase {
    endDate?: Date;
    jobId?: number;
    jobRunId?: number;
    startDate?: Date;
    status?: BuildSystemSharedDtoJobRunStatusEnum;
}
/**
 * A DTO for an IJobRun
**/
export declare class BuildSystemSharedDtoJobRun extends SpeakeasyBase {
    activityRuns?: BuildSystemSharedDtoActivityRun[];
    endDate?: Date;
    jobId?: number;
    jobRunId?: number;
    parameters?: BuildSystemSharedDtoParameterValue[];
    startDate?: Date;
    status?: BuildSystemSharedDtoJobRunStatusEnum;
}
