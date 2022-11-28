import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmConfiguration } from "./alarmconfiguration";
import { AutoRollbackConfiguration } from "./autorollbackconfiguration";
import { BlueGreenDeploymentConfiguration } from "./bluegreendeploymentconfiguration";
import { DeploymentStyle } from "./deploymentstyle";
import { Ec2TagFilter } from "./ec2tagfilter";
import { Ec2TagSet } from "./ec2tagset";
import { EcsService } from "./ecsservice";
import { LoadBalancerInfo } from "./loadbalancerinfo";
import { TagFilter } from "./tagfilter";
import { OnPremisesTagSet } from "./onpremisestagset";
import { OutdatedInstancesStrategyEnum } from "./outdatedinstancesstrategyenum";
import { TriggerConfig } from "./triggerconfig";
/**
 * Represents the input of an <code>UpdateDeploymentGroup</code> operation.
**/
export declare class UpdateDeploymentGroupInput extends SpeakeasyBase {
    alarmConfiguration?: AlarmConfiguration;
    applicationName: string;
    autoRollbackConfiguration?: AutoRollbackConfiguration;
    autoScalingGroups?: string[];
    blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;
    currentDeploymentGroupName: string;
    deploymentConfigName?: string;
    deploymentStyle?: DeploymentStyle;
    ec2TagFilters?: Ec2TagFilter[];
    ec2TagSet?: Ec2TagSet;
    ecsServices?: EcsService[];
    loadBalancerInfo?: LoadBalancerInfo;
    newDeploymentGroupName?: string;
    onPremisesInstanceTagFilters?: TagFilter[];
    onPremisesTagSet?: OnPremisesTagSet;
    outdatedInstancesStrategy?: OutdatedInstancesStrategyEnum;
    serviceRoleArn?: string;
    triggerConfigurations?: TriggerConfig[];
}
