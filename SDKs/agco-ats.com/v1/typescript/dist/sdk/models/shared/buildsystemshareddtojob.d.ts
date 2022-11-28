import { SpeakeasyBase } from "../../../internal/utils";
import { BuildSystemSharedDtoJobActivity } from "./buildsystemshareddtojobactivity";
import { BuildSystemSharedDtoParameter } from "./buildsystemshareddtoparameter";
/**
 * A DTO for an IJob
**/
export declare class BuildSystemSharedDtoJob extends SpeakeasyBase {
    activities?: BuildSystemSharedDtoJobActivity[];
    deleted?: boolean;
    jobId?: number;
    name?: string;
    parameters?: BuildSystemSharedDtoParameter[];
}
/**
 * A DTO for an IJob
**/
export declare class BuildSystemSharedDtoJobInput extends SpeakeasyBase {
    deleted?: boolean;
    jobId?: number;
    name?: string;
}
