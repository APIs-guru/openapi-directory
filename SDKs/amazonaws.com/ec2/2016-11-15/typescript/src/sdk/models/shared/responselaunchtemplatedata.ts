import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchTemplateBlockDeviceMapping } from "./launchtemplateblockdevicemapping";
import { LaunchTemplateCapacityReservationSpecificationResponse } from "./launchtemplatecapacityreservationspecificationresponse";
import { LaunchTemplateCpuOptions } from "./launchtemplatecpuoptions";
import { CreditSpecification } from "./creditspecification";
import { ElasticGpuSpecificationResponse } from "./elasticgpuspecificationresponse";
import { LaunchTemplateElasticInferenceAcceleratorResponse } from "./launchtemplateelasticinferenceacceleratorresponse";
import { LaunchTemplateEnclaveOptions } from "./launchtemplateenclaveoptions";
import { LaunchTemplateHibernationOptions } from "./launchtemplatehibernationoptions";
import { LaunchTemplateIamInstanceProfileSpecification } from "./launchtemplateiaminstanceprofilespecification";
import { ShutdownBehaviorEnum } from "./shutdownbehaviorenum";
import { LaunchTemplateInstanceMarketOptions } from "./launchtemplateinstancemarketoptions";
import { InstanceTypeEnum } from "./instancetypeenum";
import { LaunchTemplateLicenseConfiguration } from "./launchtemplatelicenseconfiguration";
import { LaunchTemplateInstanceMetadataOptions } from "./launchtemplateinstancemetadataoptions";
import { LaunchTemplatesMonitoring } from "./launchtemplatesmonitoring";
import { LaunchTemplateInstanceNetworkInterfaceSpecification } from "./launchtemplateinstancenetworkinterfacespecification";
import { LaunchTemplatePlacement } from "./launchtemplateplacement";
import { LaunchTemplateTagSpecification } from "./launchtemplatetagspecification";



// ResponseLaunchTemplateData
/** 
 * The information for a launch template. 
**/
export class ResponseLaunchTemplateData extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: LaunchTemplateBlockDeviceMapping })
  blockDeviceMappings?: LaunchTemplateBlockDeviceMapping[];

  @SpeakeasyMetadata()
  capacityReservationSpecification?: LaunchTemplateCapacityReservationSpecificationResponse;

  @SpeakeasyMetadata()
  cpuOptions?: LaunchTemplateCpuOptions;

  @SpeakeasyMetadata()
  creditSpecification?: CreditSpecification;

  @SpeakeasyMetadata()
  disableApiTermination?: boolean;

  @SpeakeasyMetadata()
  ebsOptimized?: boolean;

  @SpeakeasyMetadata({ elemType: ElasticGpuSpecificationResponse })
  elasticGpuSpecifications?: ElasticGpuSpecificationResponse[];

  @SpeakeasyMetadata({ elemType: LaunchTemplateElasticInferenceAcceleratorResponse })
  elasticInferenceAccelerators?: LaunchTemplateElasticInferenceAcceleratorResponse[];

  @SpeakeasyMetadata()
  enclaveOptions?: LaunchTemplateEnclaveOptions;

  @SpeakeasyMetadata()
  hibernationOptions?: LaunchTemplateHibernationOptions;

  @SpeakeasyMetadata()
  iamInstanceProfile?: LaunchTemplateIamInstanceProfileSpecification;

  @SpeakeasyMetadata()
  imageId?: string;

  @SpeakeasyMetadata()
  instanceInitiatedShutdownBehavior?: ShutdownBehaviorEnum;

  @SpeakeasyMetadata()
  instanceMarketOptions?: LaunchTemplateInstanceMarketOptions;

  @SpeakeasyMetadata()
  instanceType?: InstanceTypeEnum;

  @SpeakeasyMetadata()
  kernelId?: string;

  @SpeakeasyMetadata()
  keyName?: string;

  @SpeakeasyMetadata({ elemType: LaunchTemplateLicenseConfiguration })
  licenseSpecifications?: LaunchTemplateLicenseConfiguration[];

  @SpeakeasyMetadata()
  metadataOptions?: LaunchTemplateInstanceMetadataOptions;

  @SpeakeasyMetadata()
  monitoring?: LaunchTemplatesMonitoring;

  @SpeakeasyMetadata({ elemType: LaunchTemplateInstanceNetworkInterfaceSpecification })
  networkInterfaces?: LaunchTemplateInstanceNetworkInterfaceSpecification[];

  @SpeakeasyMetadata()
  placement?: LaunchTemplatePlacement;

  @SpeakeasyMetadata()
  ramDiskId?: string;

  @SpeakeasyMetadata()
  securityGroupIds?: string[];

  @SpeakeasyMetadata()
  securityGroups?: string[];

  @SpeakeasyMetadata({ elemType: LaunchTemplateTagSpecification })
  tagSpecifications?: LaunchTemplateTagSpecification[];

  @SpeakeasyMetadata()
  userData?: string;
}
