import { SpeakeasyBase } from "../../../internal/utils";
import { BuildSystemSharedDtoParameterMapping } from "./buildsystemshareddtoparametermapping";
/**
 * A DTO for an IJobActivity
**/
export declare class BuildSystemSharedDtoJobActivity extends SpeakeasyBase {
    activityId?: number;
    jobActivityId?: number;
    jobId?: number;
    parameterMappings?: BuildSystemSharedDtoParameterMapping[];
    runOrder?: number;
}
