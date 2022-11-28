import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// DeploymentGroupInfo
/** 
 * Information about a deployment group.
**/
export class DeploymentGroupInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarmConfiguration" })
  alarmConfiguration?: AlarmConfiguration;

  @SpeakeasyMetadata({ data: "json, name=applicationName" })
  applicationName?: string;

  @SpeakeasyMetadata({ data: "json, name=autoRollbackConfiguration" })
  autoRollbackConfiguration?: AutoRollbackConfiguration;

  @SpeakeasyMetadata({ data: "json, name=autoScalingGroups", elemType: AutoScalingGroup })
  autoScalingGroups?: AutoScalingGroup[];

  @SpeakeasyMetadata({ data: "json, name=blueGreenDeploymentConfiguration" })
  blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;

  @SpeakeasyMetadata({ data: "json, name=computePlatform" })
  computePlatform?: ComputePlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=deploymentConfigName" })
  deploymentConfigName?: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentGroupId" })
  deploymentGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentGroupName" })
  deploymentGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentStyle" })
  deploymentStyle?: DeploymentStyle;

  @SpeakeasyMetadata({ data: "json, name=ec2TagFilters", elemType: Ec2TagFilter })
  ec2TagFilters?: Ec2TagFilter[];

  @SpeakeasyMetadata({ data: "json, name=ec2TagSet" })
  ec2TagSet?: Ec2TagSet;

  @SpeakeasyMetadata({ data: "json, name=ecsServices", elemType: EcsService })
  ecsServices?: EcsService[];

  @SpeakeasyMetadata({ data: "json, name=lastAttemptedDeployment" })
  lastAttemptedDeployment?: LastDeploymentInfo;

  @SpeakeasyMetadata({ data: "json, name=lastSuccessfulDeployment" })
  lastSuccessfulDeployment?: LastDeploymentInfo;

  @SpeakeasyMetadata({ data: "json, name=loadBalancerInfo" })
  loadBalancerInfo?: LoadBalancerInfo;

  @SpeakeasyMetadata({ data: "json, name=onPremisesInstanceTagFilters", elemType: TagFilter })
  onPremisesInstanceTagFilters?: TagFilter[];

  @SpeakeasyMetadata({ data: "json, name=onPremisesTagSet" })
  onPremisesTagSet?: OnPremisesTagSet;

  @SpeakeasyMetadata({ data: "json, name=outdatedInstancesStrategy" })
  outdatedInstancesStrategy?: OutdatedInstancesStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=serviceRoleArn" })
  serviceRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=targetRevision" })
  targetRevision?: RevisionLocation;

  @SpeakeasyMetadata({ data: "json, name=triggerConfigurations", elemType: TriggerConfig })
  triggerConfigurations?: TriggerConfig[];
}
