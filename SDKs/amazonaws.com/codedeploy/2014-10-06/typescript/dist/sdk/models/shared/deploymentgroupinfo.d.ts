import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmConfiguration } from "./alarmconfiguration";
import { AutoRollbackConfiguration } from "./autorollbackconfiguration";
import { AutoScalingGroup } from "./autoscalinggroup";
import { BlueGreenDeploymentConfiguration } from "./bluegreendeploymentconfiguration";
import { ComputePlatformEnum } from "./computeplatformenum";
import { DeploymentStyle } from "./deploymentstyle";
import { Ec2TagFilter } from "./ec2tagfilter";
import { Ec2TagSet } from "./ec2tagset";
import { EcsService } from "./ecsservice";
import { LastDeploymentInfo } from "./lastdeploymentinfo";
import { LoadBalancerInfo } from "./loadbalancerinfo";
import { TagFilter } from "./tagfilter";
import { OnPremisesTagSet } from "./onpremisestagset";
import { OutdatedInstancesStrategyEnum } from "./outdatedinstancesstrategyenum";
import { RevisionLocation } from "./revisionlocation";
import { TriggerConfig } from "./triggerconfig";
/**
 * Information about a deployment group.
**/
export declare class DeploymentGroupInfo extends SpeakeasyBase {
    alarmConfiguration?: AlarmConfiguration;
    applicationName?: string;
    autoRollbackConfiguration?: AutoRollbackConfiguration;
    autoScalingGroups?: AutoScalingGroup[];
    blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;
    computePlatform?: ComputePlatformEnum;
    deploymentConfigName?: string;
    deploymentGroupId?: string;
    deploymentGroupName?: string;
    deploymentStyle?: DeploymentStyle;
    ec2TagFilters?: Ec2TagFilter[];
    ec2TagSet?: Ec2TagSet;
    ecsServices?: EcsService[];
    lastAttemptedDeployment?: LastDeploymentInfo;
    lastSuccessfulDeployment?: LastDeploymentInfo;
    loadBalancerInfo?: LoadBalancerInfo;
    onPremisesInstanceTagFilters?: TagFilter[];
    onPremisesTagSet?: OnPremisesTagSet;
    outdatedInstancesStrategy?: OutdatedInstancesStrategyEnum;
    serviceRoleArn?: string;
    targetRevision?: RevisionLocation;
    triggerConfigurations?: TriggerConfig[];
}
