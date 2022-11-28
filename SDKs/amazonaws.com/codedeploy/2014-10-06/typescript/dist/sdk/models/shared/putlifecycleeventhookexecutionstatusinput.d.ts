import { SpeakeasyBase } from "../../../internal/utils";
import { LifecycleEventStatusEnum } from "./lifecycleeventstatusenum";
export declare class PutLifecycleEventHookExecutionStatusInput extends SpeakeasyBase {
    deploymentId?: string;
    lifecycleEventHookExecutionId?: string;
    status?: LifecycleEventStatusEnum;
}
