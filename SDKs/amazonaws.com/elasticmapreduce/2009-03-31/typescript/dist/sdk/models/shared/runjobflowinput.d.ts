import { SpeakeasyBase } from "../../../internal/utils";
import { Application } from "./application";
import { AutoTerminationPolicy } from "./autoterminationpolicy";
import { BootstrapActionConfig } from "./bootstrapactionconfig";
import { Configuration } from "./configuration";
import { JobFlowInstancesConfig } from "./jobflowinstancesconfig";
import { KerberosAttributes } from "./kerberosattributes";
import { ManagedScalingPolicy } from "./managedscalingpolicy";
import { SupportedProductConfig } from "./supportedproductconfig";
import { PlacementGroupConfig } from "./placementgroupconfig";
import { RepoUpgradeOnBootEnum } from "./repoupgradeonbootenum";
import { ScaleDownBehaviorEnum } from "./scaledownbehaviorenum";
import { StepConfig } from "./stepconfig";
import { Tag } from "./tag";
/**
 *  Input to the <a>RunJobFlow</a> operation.
**/
export declare class RunJobFlowInput extends SpeakeasyBase {
    additionalInfo?: string;
    amiVersion?: string;
    applications?: Application[];
    autoScalingRole?: string;
    autoTerminationPolicy?: AutoTerminationPolicy;
    bootstrapActions?: BootstrapActionConfig[];
    configurations?: Configuration[];
    customAmiId?: string;
    ebsRootVolumeSize?: number;
    instances: JobFlowInstancesConfig;
    jobFlowRole?: string;
    kerberosAttributes?: KerberosAttributes;
    logEncryptionKmsKeyId?: string;
    logUri?: string;
    managedScalingPolicy?: ManagedScalingPolicy;
    name: string;
    newSupportedProducts?: SupportedProductConfig[];
    placementGroupConfigs?: PlacementGroupConfig[];
    releaseLabel?: string;
    repoUpgradeOnBoot?: RepoUpgradeOnBootEnum;
    scaleDownBehavior?: ScaleDownBehaviorEnum;
    securityConfiguration?: string;
    serviceRole?: string;
    stepConcurrencyLevel?: number;
    steps?: StepConfig[];
    supportedProducts?: string[];
    tags?: Tag[];
    visibleToAllUsers?: boolean;
}
