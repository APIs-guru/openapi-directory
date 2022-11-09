import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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


// RunJobFlowInput
/** 
 *  Input to the <a>RunJobFlow</a> operation. 
**/
export class RunJobFlowInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdditionalInfo" })
  additionalInfo?: string;

  @Metadata({ data: "json, name=AmiVersion" })
  amiVersion?: string;

  @Metadata({ data: "json, name=Applications", elemType: shared.Application })
  applications?: Application[];

  @Metadata({ data: "json, name=AutoScalingRole" })
  autoScalingRole?: string;

  @Metadata({ data: "json, name=AutoTerminationPolicy" })
  autoTerminationPolicy?: AutoTerminationPolicy;

  @Metadata({ data: "json, name=BootstrapActions", elemType: shared.BootstrapActionConfig })
  bootstrapActions?: BootstrapActionConfig[];

  @Metadata({ data: "json, name=Configurations", elemType: shared.Configuration })
  configurations?: Configuration[];

  @Metadata({ data: "json, name=CustomAmiId" })
  customAmiId?: string;

  @Metadata({ data: "json, name=EbsRootVolumeSize" })
  ebsRootVolumeSize?: number;

  @Metadata({ data: "json, name=Instances" })
  instances: JobFlowInstancesConfig;

  @Metadata({ data: "json, name=JobFlowRole" })
  jobFlowRole?: string;

  @Metadata({ data: "json, name=KerberosAttributes" })
  kerberosAttributes?: KerberosAttributes;

  @Metadata({ data: "json, name=LogEncryptionKmsKeyId" })
  logEncryptionKmsKeyId?: string;

  @Metadata({ data: "json, name=LogUri" })
  logUri?: string;

  @Metadata({ data: "json, name=ManagedScalingPolicy" })
  managedScalingPolicy?: ManagedScalingPolicy;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=NewSupportedProducts", elemType: shared.SupportedProductConfig })
  newSupportedProducts?: SupportedProductConfig[];

  @Metadata({ data: "json, name=PlacementGroupConfigs", elemType: shared.PlacementGroupConfig })
  placementGroupConfigs?: PlacementGroupConfig[];

  @Metadata({ data: "json, name=ReleaseLabel" })
  releaseLabel?: string;

  @Metadata({ data: "json, name=RepoUpgradeOnBoot" })
  repoUpgradeOnBoot?: RepoUpgradeOnBootEnum;

  @Metadata({ data: "json, name=ScaleDownBehavior" })
  scaleDownBehavior?: ScaleDownBehaviorEnum;

  @Metadata({ data: "json, name=SecurityConfiguration" })
  securityConfiguration?: string;

  @Metadata({ data: "json, name=ServiceRole" })
  serviceRole?: string;

  @Metadata({ data: "json, name=StepConcurrencyLevel" })
  stepConcurrencyLevel?: number;

  @Metadata({ data: "json, name=Steps", elemType: shared.StepConfig })
  steps?: StepConfig[];

  @Metadata({ data: "json, name=SupportedProducts" })
  supportedProducts?: string[];

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=VisibleToAllUsers" })
  visibleToAllUsers?: boolean;
}
