import { SpeakeasyBase } from "../../../internal/utils";
import { BuildSystemSharedDtoParameter } from "./buildsystemshareddtoparameter";
import { BuildSystemSharedDtoActivityStep } from "./buildsystemshareddtoactivitystep";
/**
 * A DTO for an IActivity
**/
export declare class BuildSystemSharedDtoActivityInput extends SpeakeasyBase {
    activityId?: number;
    deleted?: boolean;
    name?: string;
}
/**
 * A DTO for an IActivity
**/
export declare class BuildSystemSharedDtoActivity extends SpeakeasyBase {
    activityId?: number;
    deleted?: boolean;
    name?: string;
    parameters?: BuildSystemSharedDtoParameter[];
    steps?: BuildSystemSharedDtoActivityStep[];
}
