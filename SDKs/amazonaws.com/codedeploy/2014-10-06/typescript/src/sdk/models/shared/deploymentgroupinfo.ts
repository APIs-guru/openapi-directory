import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=alarmConfiguration" })
  alarmConfiguration?: AlarmConfiguration;

  @Metadata({ data: "json, name=applicationName" })
  applicationName?: string;

  @Metadata({ data: "json, name=autoRollbackConfiguration" })
  autoRollbackConfiguration?: AutoRollbackConfiguration;

  @Metadata({ data: "json, name=autoScalingGroups", elemType: shared.AutoScalingGroup })
  autoScalingGroups?: AutoScalingGroup[];

  @Metadata({ data: "json, name=blueGreenDeploymentConfiguration" })
  blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;

  @Metadata({ data: "json, name=computePlatform" })
  computePlatform?: ComputePlatformEnum;

  @Metadata({ data: "json, name=deploymentConfigName" })
  deploymentConfigName?: string;

  @Metadata({ data: "json, name=deploymentGroupId" })
  deploymentGroupId?: string;

  @Metadata({ data: "json, name=deploymentGroupName" })
  deploymentGroupName?: string;

  @Metadata({ data: "json, name=deploymentStyle" })
  deploymentStyle?: DeploymentStyle;

  @Metadata({ data: "json, name=ec2TagFilters", elemType: shared.Ec2TagFilter })
  ec2TagFilters?: Ec2TagFilter[];

  @Metadata({ data: "json, name=ec2TagSet" })
  ec2TagSet?: Ec2TagSet;

  @Metadata({ data: "json, name=ecsServices", elemType: shared.EcsService })
  ecsServices?: EcsService[];

  @Metadata({ data: "json, name=lastAttemptedDeployment" })
  lastAttemptedDeployment?: LastDeploymentInfo;

  @Metadata({ data: "json, name=lastSuccessfulDeployment" })
  lastSuccessfulDeployment?: LastDeploymentInfo;

  @Metadata({ data: "json, name=loadBalancerInfo" })
  loadBalancerInfo?: LoadBalancerInfo;

  @Metadata({ data: "json, name=onPremisesInstanceTagFilters", elemType: shared.TagFilter })
  onPremisesInstanceTagFilters?: TagFilter[];

  @Metadata({ data: "json, name=onPremisesTagSet" })
  onPremisesTagSet?: OnPremisesTagSet;

  @Metadata({ data: "json, name=outdatedInstancesStrategy" })
  outdatedInstancesStrategy?: OutdatedInstancesStrategyEnum;

  @Metadata({ data: "json, name=serviceRoleArn" })
  serviceRoleArn?: string;

  @Metadata({ data: "json, name=targetRevision" })
  targetRevision?: RevisionLocation;

  @Metadata({ data: "json, name=triggerConfigurations", elemType: shared.TriggerConfig })
  triggerConfigurations?: TriggerConfig[];
}
