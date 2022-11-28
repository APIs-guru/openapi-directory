import { SpeakeasyBase } from "../../../internal/utils";
import { EbsInfo } from "./ebsinfo";
import { FpgaInfo } from "./fpgainfo";
import { GpuInfo } from "./gpuinfo";
import { InstanceTypeHypervisorEnum } from "./instancetypehypervisorenum";
import { InferenceAcceleratorInfo } from "./inferenceacceleratorinfo";
import { InstanceStorageInfo } from "./instancestorageinfo";
import { InstanceTypeEnum } from "./instancetypeenum";
import { MemoryInfo } from "./memoryinfo";
import { NetworkInfo } from "./networkinfo";
import { PlacementGroupInfo } from "./placementgroupinfo";
import { ProcessorInfo } from "./processorinfo";
import { BootModeTypeEnum } from "./bootmodetypeenum";
import { RootDeviceTypeEnum } from "./rootdevicetypeenum";
import { UsageClassTypeEnum } from "./usageclasstypeenum";
import { VirtualizationTypeEnum } from "./virtualizationtypeenum";
import { VCpuInfo } from "./vcpuinfo";
/**
 * Describes the instance type.
**/
export declare class InstanceTypeInfo extends SpeakeasyBase {
    autoRecoverySupported?: boolean;
    bareMetal?: boolean;
    burstablePerformanceSupported?: boolean;
    currentGeneration?: boolean;
    dedicatedHostsSupported?: boolean;
    ebsInfo?: EbsInfo;
    fpgaInfo?: FpgaInfo;
    freeTierEligible?: boolean;
    gpuInfo?: GpuInfo;
    hibernationSupported?: boolean;
    hypervisor?: InstanceTypeHypervisorEnum;
    inferenceAcceleratorInfo?: InferenceAcceleratorInfo;
    instanceStorageInfo?: InstanceStorageInfo;
    instanceStorageSupported?: boolean;
    instanceType?: InstanceTypeEnum;
    memoryInfo?: MemoryInfo;
    networkInfo?: NetworkInfo;
    placementGroupInfo?: PlacementGroupInfo;
    processorInfo?: ProcessorInfo;
    supportedBootModes?: BootModeTypeEnum[];
    supportedRootDeviceTypes?: RootDeviceTypeEnum[];
    supportedUsageClasses?: UsageClassTypeEnum[];
    supportedVirtualizationTypes?: VirtualizationTypeEnum[];
    vCpuInfo?: VCpuInfo;
}
