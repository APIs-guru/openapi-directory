import { SpeakeasyBase } from "../../../internal/utils";
import { AutoRollbackConfiguration } from "./autorollbackconfiguration";
import { BlueGreenDeploymentConfiguration } from "./bluegreendeploymentconfiguration";
import { ComputePlatformEnum } from "./computeplatformenum";
import { DeploymentCreatorEnum } from "./deploymentcreatorenum";
import { DeploymentOverview } from "./deploymentoverview";
import { DeploymentStyle } from "./deploymentstyle";
import { ErrorInformation } from "./errorinformation";
import { FileExistsBehaviorEnum } from "./fileexistsbehaviorenum";
import { LoadBalancerInfo } from "./loadbalancerinfo";
import { RevisionLocation } from "./revisionlocation";
import { RelatedDeployments } from "./relateddeployments";
import { RollbackInfo } from "./rollbackinfo";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
import { TargetInstances } from "./targetinstances";
/**
 * Information about a deployment.
**/
export declare class DeploymentInfo extends SpeakeasyBase {
    additionalDeploymentStatusInfo?: string;
    applicationName?: string;
    autoRollbackConfiguration?: AutoRollbackConfiguration;
    blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;
    completeTime?: Date;
    computePlatform?: ComputePlatformEnum;
    createTime?: Date;
    creator?: DeploymentCreatorEnum;
    deploymentConfigName?: string;
    deploymentGroupName?: string;
    deploymentId?: string;
    deploymentOverview?: DeploymentOverview;
    deploymentStatusMessages?: string[];
    deploymentStyle?: DeploymentStyle;
    description?: string;
    errorInformation?: ErrorInformation;
    externalId?: string;
    fileExistsBehavior?: FileExistsBehaviorEnum;
    ignoreApplicationStopFailures?: boolean;
    instanceTerminationWaitTimeStarted?: boolean;
    loadBalancerInfo?: LoadBalancerInfo;
    previousRevision?: RevisionLocation;
    relatedDeployments?: RelatedDeployments;
    revision?: RevisionLocation;
    rollbackInfo?: RollbackInfo;
    startTime?: Date;
    status?: DeploymentStatusEnum;
    targetInstances?: TargetInstances;
    updateOutdatedInstancesOnly?: boolean;
}
