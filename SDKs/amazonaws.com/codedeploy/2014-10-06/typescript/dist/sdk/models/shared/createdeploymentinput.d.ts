import { SpeakeasyBase } from "../../../internal/utils";
import { AutoRollbackConfiguration } from "./autorollbackconfiguration";
import { FileExistsBehaviorEnum } from "./fileexistsbehaviorenum";
import { RevisionLocation } from "./revisionlocation";
import { TargetInstances } from "./targetinstances";
/**
 * Represents the input of a <code>CreateDeployment</code> operation.
**/
export declare class CreateDeploymentInput extends SpeakeasyBase {
    applicationName: string;
    autoRollbackConfiguration?: AutoRollbackConfiguration;
    deploymentConfigName?: string;
    deploymentGroupName?: string;
    description?: string;
    fileExistsBehavior?: FileExistsBehaviorEnum;
    ignoreApplicationStopFailures?: boolean;
    revision?: RevisionLocation;
    targetInstances?: TargetInstances;
    updateOutdatedInstancesOnly?: boolean;
}
