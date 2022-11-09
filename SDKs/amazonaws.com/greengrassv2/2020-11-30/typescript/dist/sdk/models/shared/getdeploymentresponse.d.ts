import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ComponentDeploymentSpecification } from "./componentdeploymentspecification";
import { DeploymentPolicies } from "./deploymentpolicies";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
import { DeploymentIoTJobConfiguration } from "./deploymentiotjobconfiguration";
export declare class GetDeploymentResponse extends SpeakeasyBase {
    components?: Map<string, ComponentDeploymentSpecification>;
    creationTimestamp?: Date;
    deploymentId?: string;
    deploymentName?: string;
    deploymentPolicies?: DeploymentPolicies;
    deploymentStatus?: DeploymentStatusEnum;
    iotJobArn?: string;
    iotJobConfiguration?: DeploymentIoTJobConfiguration;
    iotJobId?: string;
    isLatestForTarget?: boolean;
    revisionId?: string;
    tags?: Map<string, string>;
    targetArn?: string;
}
