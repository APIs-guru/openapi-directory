import { SpeakeasyBase } from "../../../internal/utils";
import { LifecycleEvent } from "./lifecycleevent";
import { TargetStatusEnum } from "./targetstatusenum";
/**
 *  Information about the target to be updated by an AWS CloudFormation blue/green deployment. This target type is used for all deployments initiated by a CloudFormation stack update.
**/
export declare class CloudFormationTarget extends SpeakeasyBase {
    deploymentId?: string;
    lastUpdatedAt?: Date;
    lifecycleEvents?: LifecycleEvent[];
    resourceType?: string;
    status?: TargetStatusEnum;
    targetId?: string;
    targetVersionWeight?: number;
}
