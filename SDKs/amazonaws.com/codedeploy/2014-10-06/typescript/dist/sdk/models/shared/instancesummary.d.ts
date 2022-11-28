import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceTypeEnum } from "./instancetypeenum";
import { LifecycleEvent } from "./lifecycleevent";
import { InstanceStatusEnum } from "./instancestatusenum";
/**
 * Information about an instance in a deployment.InstanceSummary is deprecated, use DeploymentTarget instead.
**/
export declare class InstanceSummary extends SpeakeasyBase {
    deploymentId?: string;
    instanceId?: string;
    instanceType?: InstanceTypeEnum;
    lastUpdatedAt?: Date;
    lifecycleEvents?: LifecycleEvent[];
    status?: InstanceStatusEnum;
}
