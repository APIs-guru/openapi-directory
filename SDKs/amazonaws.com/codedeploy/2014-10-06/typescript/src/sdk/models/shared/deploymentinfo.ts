import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// DeploymentInfo
/** 
 * Information about a deployment.
**/
export class DeploymentInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalDeploymentStatusInfo" })
  additionalDeploymentStatusInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=applicationName" })
  applicationName?: string;

  @SpeakeasyMetadata({ data: "json, name=autoRollbackConfiguration" })
  autoRollbackConfiguration?: AutoRollbackConfiguration;

  @SpeakeasyMetadata({ data: "json, name=blueGreenDeploymentConfiguration" })
  blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;

  @SpeakeasyMetadata({ data: "json, name=completeTime" })
  completeTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=computePlatform" })
  computePlatform?: ComputePlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: DeploymentCreatorEnum;

  @SpeakeasyMetadata({ data: "json, name=deploymentConfigName" })
  deploymentConfigName?: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentGroupName" })
  deploymentGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentOverview" })
  deploymentOverview?: DeploymentOverview;

  @SpeakeasyMetadata({ data: "json, name=deploymentStatusMessages" })
  deploymentStatusMessages?: string[];

  @SpeakeasyMetadata({ data: "json, name=deploymentStyle" })
  deploymentStyle?: DeploymentStyle;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=errorInformation" })
  errorInformation?: ErrorInformation;

  @SpeakeasyMetadata({ data: "json, name=externalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=fileExistsBehavior" })
  fileExistsBehavior?: FileExistsBehaviorEnum;

  @SpeakeasyMetadata({ data: "json, name=ignoreApplicationStopFailures" })
  ignoreApplicationStopFailures?: boolean;

  @SpeakeasyMetadata({ data: "json, name=instanceTerminationWaitTimeStarted" })
  instanceTerminationWaitTimeStarted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=loadBalancerInfo" })
  loadBalancerInfo?: LoadBalancerInfo;

  @SpeakeasyMetadata({ data: "json, name=previousRevision" })
  previousRevision?: RevisionLocation;

  @SpeakeasyMetadata({ data: "json, name=relatedDeployments" })
  relatedDeployments?: RelatedDeployments;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: RevisionLocation;

  @SpeakeasyMetadata({ data: "json, name=rollbackInfo" })
  rollbackInfo?: RollbackInfo;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: DeploymentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=targetInstances" })
  targetInstances?: TargetInstances;

  @SpeakeasyMetadata({ data: "json, name=updateOutdatedInstancesOnly" })
  updateOutdatedInstancesOnly?: boolean;
}
