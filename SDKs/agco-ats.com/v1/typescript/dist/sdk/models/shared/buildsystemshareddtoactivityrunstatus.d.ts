import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BuildSystemSharedDtoActivityRunStatusStatusEnum {
    Ready = "Ready",
    InProgress = "InProgress",
    Succeeded = "Succeeded",
    Cancelled = "Cancelled",
    Failed = "Failed"
}
/**
 * A DTO for an IActivityRunStatus
**/
export declare class BuildSystemSharedDtoActivityRunStatus extends SpeakeasyBase {
    currentStep?: number;
    status?: BuildSystemSharedDtoActivityRunStatusStatusEnum;
    stepProgress?: number;
    stepStatus?: string;
}
