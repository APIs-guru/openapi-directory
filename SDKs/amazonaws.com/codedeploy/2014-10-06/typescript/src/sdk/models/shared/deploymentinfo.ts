import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
import { RevisionLocation } from "./revisionlocation";
import { RollbackInfo } from "./rollbackinfo";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
import { TargetInstances } from "./targetinstances";


// DeploymentInfo
/** 
 * Information about a deployment.
**/
export class DeploymentInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalDeploymentStatusInfo" })
  additionalDeploymentStatusInfo?: string;

  @Metadata({ data: "json, name=applicationName" })
  applicationName?: string;

  @Metadata({ data: "json, name=autoRollbackConfiguration" })
  autoRollbackConfiguration?: AutoRollbackConfiguration;

  @Metadata({ data: "json, name=blueGreenDeploymentConfiguration" })
  blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;

  @Metadata({ data: "json, name=completeTime" })
  completeTime?: Date;

  @Metadata({ data: "json, name=computePlatform" })
  computePlatform?: ComputePlatformEnum;

  @Metadata({ data: "json, name=createTime" })
  createTime?: Date;

  @Metadata({ data: "json, name=creator" })
  creator?: DeploymentCreatorEnum;

  @Metadata({ data: "json, name=deploymentConfigName" })
  deploymentConfigName?: string;

  @Metadata({ data: "json, name=deploymentGroupName" })
  deploymentGroupName?: string;

  @Metadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=deploymentOverview" })
  deploymentOverview?: DeploymentOverview;

  @Metadata({ data: "json, name=deploymentStatusMessages" })
  deploymentStatusMessages?: string[];

  @Metadata({ data: "json, name=deploymentStyle" })
  deploymentStyle?: DeploymentStyle;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=errorInformation" })
  errorInformation?: ErrorInformation;

  @Metadata({ data: "json, name=externalId" })
  externalId?: string;

  @Metadata({ data: "json, name=fileExistsBehavior" })
  fileExistsBehavior?: FileExistsBehaviorEnum;

  @Metadata({ data: "json, name=ignoreApplicationStopFailures" })
  ignoreApplicationStopFailures?: boolean;

  @Metadata({ data: "json, name=instanceTerminationWaitTimeStarted" })
  instanceTerminationWaitTimeStarted?: boolean;

  @Metadata({ data: "json, name=loadBalancerInfo" })
  loadBalancerInfo?: LoadBalancerInfo;

  @Metadata({ data: "json, name=previousRevision" })
  previousRevision?: RevisionLocation;

  @Metadata({ data: "json, name=relatedDeployments" })
  relatedDeployments?: RelatedDeployments;

  @Metadata({ data: "json, name=revision" })
  revision?: RevisionLocation;

  @Metadata({ data: "json, name=rollbackInfo" })
  rollbackInfo?: RollbackInfo;

  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=status" })
  status?: DeploymentStatusEnum;

  @Metadata({ data: "json, name=targetInstances" })
  targetInstances?: TargetInstances;

  @Metadata({ data: "json, name=updateOutdatedInstancesOnly" })
  updateOutdatedInstancesOnly?: boolean;
}
