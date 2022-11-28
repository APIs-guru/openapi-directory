import { SpeakeasyBase } from "../../../internal/utils";
import { BuildSystemSharedDtoParameter } from "./buildsystemshareddtoparameter";
/**
 * Step
**/
export declare class BuildSystemSharedDtoStepInput extends SpeakeasyBase {
    configRequired: boolean;
    deleted?: boolean;
    description?: string;
    implementationId: string;
    name: string;
    stepId?: number;
}
/**
 * Step
**/
export declare class BuildSystemSharedDtoStep extends SpeakeasyBase {
    configRequired: boolean;
    deleted?: boolean;
    description?: string;
    implementationId: string;
    name: string;
    parameters?: BuildSystemSharedDtoParameter[];
    stepId?: number;
}
