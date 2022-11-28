import { SpeakeasyBase } from "../../../internal/utils";
import { BuildSystemSharedDtoParameterMapping } from "./buildsystemshareddtoparametermapping";
/**
 * A DTO for an IActivityStep
**/
export declare class BuildSystemSharedDtoActivityStep extends SpeakeasyBase {
    activityId?: number;
    activityStepId?: number;
    implementationId?: string;
    parameterMappings?: BuildSystemSharedDtoParameterMapping[];
    runOrder?: number;
    stepId?: number;
    stepName?: string;
    useConfig?: string;
}
