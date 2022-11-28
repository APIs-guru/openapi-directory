import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * The information for a launch template.
**/
export declare class ResponseLaunchTemplateData extends SpeakeasyBase {
    blockDeviceMappings?: LaunchTemplateBlockDeviceMapping[];
    capacityReservationSpecification?: LaunchTemplateCapacityReservationSpecificationResponse;
    cpuOptions?: LaunchTemplateCpuOptions;
    creditSpecification?: CreditSpecification;
    disableApiTermination?: boolean;
    ebsOptimized?: boolean;
    elasticGpuSpecifications?: ElasticGpuSpecificationResponse[];
    elasticInferenceAccelerators?: LaunchTemplateElasticInferenceAcceleratorResponse[];
    enclaveOptions?: LaunchTemplateEnclaveOptions;
    hibernationOptions?: LaunchTemplateHibernationOptions;
    iamInstanceProfile?: LaunchTemplateIamInstanceProfileSpecification;
    imageId?: string;
    instanceInitiatedShutdownBehavior?: ShutdownBehaviorEnum;
    instanceMarketOptions?: LaunchTemplateInstanceMarketOptions;
    instanceType?: InstanceTypeEnum;
    kernelId?: string;
    keyName?: string;
    licenseSpecifications?: LaunchTemplateLicenseConfiguration[];
    metadataOptions?: LaunchTemplateInstanceMetadataOptions;
    monitoring?: LaunchTemplatesMonitoring;
    networkInterfaces?: LaunchTemplateInstanceNetworkInterfaceSpecification[];
    placement?: LaunchTemplatePlacement;
    ramDiskId?: string;
    securityGroupIds?: string[];
    securityGroups?: string[];
    tagSpecifications?: LaunchTemplateTagSpecification[];
    userData?: string;
}
