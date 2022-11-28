import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentLifecycleStatusEnum } from "./environmentlifecyclestatusenum";
/**
 * Information about the current creation or deletion lifecycle state of an Cloud9 development environment.
**/
export declare class EnvironmentLifecycle extends SpeakeasyBase {
    failureResource?: string;
    reason?: string;
    status?: EnvironmentLifecycleStatusEnum;
}
