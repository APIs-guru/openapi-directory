import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
import { Tag } from "./tag";
import { TriggerConfig } from "./triggerconfig";



// CreateDeploymentGroupInput
/** 
 * Represents the input of a <code>CreateDeploymentGroup</code> operation.
**/
export class CreateDeploymentGroupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarmConfiguration" })
  alarmConfiguration?: AlarmConfiguration;

  @SpeakeasyMetadata({ data: "json, name=applicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=autoRollbackConfiguration" })
  autoRollbackConfiguration?: AutoRollbackConfiguration;

  @SpeakeasyMetadata({ data: "json, name=autoScalingGroups" })
  autoScalingGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=blueGreenDeploymentConfiguration" })
  blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;

  @SpeakeasyMetadata({ data: "json, name=deploymentConfigName" })
  deploymentConfigName?: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentGroupName" })
  deploymentGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentStyle" })
  deploymentStyle?: DeploymentStyle;

  @SpeakeasyMetadata({ data: "json, name=ec2TagFilters", elemType: Ec2TagFilter })
  ec2TagFilters?: Ec2TagFilter[];

  @SpeakeasyMetadata({ data: "json, name=ec2TagSet" })
  ec2TagSet?: Ec2TagSet;

  @SpeakeasyMetadata({ data: "json, name=ecsServices", elemType: EcsService })
  ecsServices?: EcsService[];

  @SpeakeasyMetadata({ data: "json, name=loadBalancerInfo" })
  loadBalancerInfo?: LoadBalancerInfo;

  @SpeakeasyMetadata({ data: "json, name=onPremisesInstanceTagFilters", elemType: TagFilter })
  onPremisesInstanceTagFilters?: TagFilter[];

  @SpeakeasyMetadata({ data: "json, name=onPremisesTagSet" })
  onPremisesTagSet?: OnPremisesTagSet;

  @SpeakeasyMetadata({ data: "json, name=outdatedInstancesStrategy" })
  outdatedInstancesStrategy?: OutdatedInstancesStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=serviceRoleArn" })
  serviceRoleArn: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=triggerConfigurations", elemType: TriggerConfig })
  triggerConfigurations?: TriggerConfig[];
}
