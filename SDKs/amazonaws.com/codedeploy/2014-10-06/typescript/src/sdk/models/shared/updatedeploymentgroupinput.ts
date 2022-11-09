import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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


// UpdateDeploymentGroupInput
/** 
 * Represents the input of an <code>UpdateDeploymentGroup</code> operation.
**/
export class UpdateDeploymentGroupInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarmConfiguration" })
  alarmConfiguration?: AlarmConfiguration;

  @Metadata({ data: "json, name=applicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=autoRollbackConfiguration" })
  autoRollbackConfiguration?: AutoRollbackConfiguration;

  @Metadata({ data: "json, name=autoScalingGroups" })
  autoScalingGroups?: string[];

  @Metadata({ data: "json, name=blueGreenDeploymentConfiguration" })
  blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;

  @Metadata({ data: "json, name=currentDeploymentGroupName" })
  currentDeploymentGroupName: string;

  @Metadata({ data: "json, name=deploymentConfigName" })
  deploymentConfigName?: string;

  @Metadata({ data: "json, name=deploymentStyle" })
  deploymentStyle?: DeploymentStyle;

  @Metadata({ data: "json, name=ec2TagFilters", elemType: shared.Ec2TagFilter })
  ec2TagFilters?: Ec2TagFilter[];

  @Metadata({ data: "json, name=ec2TagSet" })
  ec2TagSet?: Ec2TagSet;

  @Metadata({ data: "json, name=ecsServices", elemType: shared.EcsService })
  ecsServices?: EcsService[];

  @Metadata({ data: "json, name=loadBalancerInfo" })
  loadBalancerInfo?: LoadBalancerInfo;

  @Metadata({ data: "json, name=newDeploymentGroupName" })
  newDeploymentGroupName?: string;

  @Metadata({ data: "json, name=onPremisesInstanceTagFilters", elemType: shared.TagFilter })
  onPremisesInstanceTagFilters?: TagFilter[];

  @Metadata({ data: "json, name=onPremisesTagSet" })
  onPremisesTagSet?: OnPremisesTagSet;

  @Metadata({ data: "json, name=outdatedInstancesStrategy" })
  outdatedInstancesStrategy?: OutdatedInstancesStrategyEnum;

  @Metadata({ data: "json, name=serviceRoleArn" })
  serviceRoleArn?: string;

  @Metadata({ data: "json, name=triggerConfigurations", elemType: shared.TriggerConfig })
  triggerConfigurations?: TriggerConfig[];
}
