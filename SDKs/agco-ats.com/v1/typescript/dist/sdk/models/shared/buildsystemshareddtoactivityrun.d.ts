import { SpeakeasyBase } from "../../../internal/utils";
import { BuildSystemSharedDtoActivityRunStatus } from "./buildsystemshareddtoactivityrunstatus";
import { BuildSystemSharedDtoParameterValue } from "./buildsystemshareddtoparametervalue";
import { BuildSystemSharedDtoActivityStep } from "./buildsystemshareddtoactivitystep";
/**
 * A DTO for an IActivityRun
**/
export declare class BuildSystemSharedDtoActivityRunInput extends SpeakeasyBase {
    activityRunId?: number;
    endDate?: Date;
    jobActivityId?: number;
    jobRunId?: number;
    startDate?: Date;
    status: BuildSystemSharedDtoActivityRunStatus;
}
/**
 * A DTO for an IActivityRun
**/
export declare class BuildSystemSharedDtoActivityRun extends SpeakeasyBase {
    activityRunId?: number;
    endDate?: Date;
    jobActivityId?: number;
    jobRunId?: number;
    parameters?: BuildSystemSharedDtoParameterValue[];
    startDate?: Date;
    status: BuildSystemSharedDtoActivityRunStatus;
    steps?: BuildSystemSharedDtoActivityStep[];
}
