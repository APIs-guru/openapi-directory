import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=AdditionalInfo" })
  additionalInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=AmiVersion" })
  amiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Applications", elemType: Application })
  applications?: Application[];

  @SpeakeasyMetadata({ data: "json, name=AutoScalingRole" })
  autoScalingRole?: string;

  @SpeakeasyMetadata({ data: "json, name=AutoTerminationPolicy" })
  autoTerminationPolicy?: AutoTerminationPolicy;

  @SpeakeasyMetadata({ data: "json, name=BootstrapActions", elemType: BootstrapActionConfig })
  bootstrapActions?: BootstrapActionConfig[];

  @SpeakeasyMetadata({ data: "json, name=Configurations", elemType: Configuration })
  configurations?: Configuration[];

  @SpeakeasyMetadata({ data: "json, name=CustomAmiId" })
  customAmiId?: string;

  @SpeakeasyMetadata({ data: "json, name=EbsRootVolumeSize" })
  ebsRootVolumeSize?: number;

  @SpeakeasyMetadata({ data: "json, name=Instances" })
  instances: JobFlowInstancesConfig;

  @SpeakeasyMetadata({ data: "json, name=JobFlowRole" })
  jobFlowRole?: string;

  @SpeakeasyMetadata({ data: "json, name=KerberosAttributes" })
  kerberosAttributes?: KerberosAttributes;

  @SpeakeasyMetadata({ data: "json, name=LogEncryptionKmsKeyId" })
  logEncryptionKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=LogUri" })
  logUri?: string;

  @SpeakeasyMetadata({ data: "json, name=ManagedScalingPolicy" })
  managedScalingPolicy?: ManagedScalingPolicy;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=NewSupportedProducts", elemType: SupportedProductConfig })
  newSupportedProducts?: SupportedProductConfig[];

  @SpeakeasyMetadata({ data: "json, name=PlacementGroupConfigs", elemType: PlacementGroupConfig })
  placementGroupConfigs?: PlacementGroupConfig[];

  @SpeakeasyMetadata({ data: "json, name=ReleaseLabel" })
  releaseLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=RepoUpgradeOnBoot" })
  repoUpgradeOnBoot?: RepoUpgradeOnBootEnum;

  @SpeakeasyMetadata({ data: "json, name=ScaleDownBehavior" })
  scaleDownBehavior?: ScaleDownBehaviorEnum;

  @SpeakeasyMetadata({ data: "json, name=SecurityConfiguration" })
  securityConfiguration?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceRole" })
  serviceRole?: string;

  @SpeakeasyMetadata({ data: "json, name=StepConcurrencyLevel" })
  stepConcurrencyLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=Steps", elemType: StepConfig })
  steps?: StepConfig[];

  @SpeakeasyMetadata({ data: "json, name=SupportedProducts" })
  supportedProducts?: string[];

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=VisibleToAllUsers" })
  visibleToAllUsers?: boolean;
}
