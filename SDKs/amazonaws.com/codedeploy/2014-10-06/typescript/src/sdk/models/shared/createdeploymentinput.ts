import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoRollbackConfiguration } from "./autorollbackconfiguration";
import { FileExistsBehaviorEnum } from "./fileexistsbehaviorenum";
import { RevisionLocation } from "./revisionlocation";
import { TargetInstances } from "./targetinstances";



// CreateDeploymentInput
/** 
 * Represents the input of a <code>CreateDeployment</code> operation.
**/
export class CreateDeploymentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=autoRollbackConfiguration" })
  autoRollbackConfiguration?: AutoRollbackConfiguration;

  @SpeakeasyMetadata({ data: "json, name=deploymentConfigName" })
  deploymentConfigName?: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentGroupName" })
  deploymentGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=fileExistsBehavior" })
  fileExistsBehavior?: FileExistsBehaviorEnum;

  @SpeakeasyMetadata({ data: "json, name=ignoreApplicationStopFailures" })
  ignoreApplicationStopFailures?: boolean;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: RevisionLocation;

  @SpeakeasyMetadata({ data: "json, name=targetInstances" })
  targetInstances?: TargetInstances;

  @SpeakeasyMetadata({ data: "json, name=updateOutdatedInstancesOnly" })
  updateOutdatedInstancesOnly?: boolean;
}
