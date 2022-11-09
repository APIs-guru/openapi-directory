import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoRollbackConfiguration } from "./autorollbackconfiguration";
import { FileExistsBehaviorEnum } from "./fileexistsbehaviorenum";
import { RevisionLocation } from "./revisionlocation";
import { TargetInstances } from "./targetinstances";


// CreateDeploymentInput
/** 
 * Represents the input of a <code>CreateDeployment</code> operation.
**/
export class CreateDeploymentInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=autoRollbackConfiguration" })
  autoRollbackConfiguration?: AutoRollbackConfiguration;

  @Metadata({ data: "json, name=deploymentConfigName" })
  deploymentConfigName?: string;

  @Metadata({ data: "json, name=deploymentGroupName" })
  deploymentGroupName?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=fileExistsBehavior" })
  fileExistsBehavior?: FileExistsBehaviorEnum;

  @Metadata({ data: "json, name=ignoreApplicationStopFailures" })
  ignoreApplicationStopFailures?: boolean;

  @Metadata({ data: "json, name=revision" })
  revision?: RevisionLocation;

  @Metadata({ data: "json, name=targetInstances" })
  targetInstances?: TargetInstances;

  @Metadata({ data: "json, name=updateOutdatedInstancesOnly" })
  updateOutdatedInstancesOnly?: boolean;
}
