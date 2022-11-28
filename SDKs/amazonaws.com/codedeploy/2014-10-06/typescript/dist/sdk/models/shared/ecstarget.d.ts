import { SpeakeasyBase } from "../../../internal/utils";
import { LifecycleEvent } from "./lifecycleevent";
import { TargetStatusEnum } from "./targetstatusenum";
import { EcsTaskSet } from "./ecstaskset";
/**
 *  Information about the target of an Amazon ECS deployment.
**/
export declare class EcsTarget extends SpeakeasyBase {
    deploymentId?: string;
    lastUpdatedAt?: Date;
    lifecycleEvents?: LifecycleEvent[];
    status?: TargetStatusEnum;
    targetArn?: string;
    targetId?: string;
    taskSetsInfo?: EcsTaskSet[];
}
