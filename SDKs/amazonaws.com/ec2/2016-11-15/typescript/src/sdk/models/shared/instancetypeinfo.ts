import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// InstanceTypeInfo
/** 
 * Describes the instance type.
**/
export class InstanceTypeInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  autoRecoverySupported?: boolean;

  @SpeakeasyMetadata()
  bareMetal?: boolean;

  @SpeakeasyMetadata()
  burstablePerformanceSupported?: boolean;

  @SpeakeasyMetadata()
  currentGeneration?: boolean;

  @SpeakeasyMetadata()
  dedicatedHostsSupported?: boolean;

  @SpeakeasyMetadata()
  ebsInfo?: EbsInfo;

  @SpeakeasyMetadata()
  fpgaInfo?: FpgaInfo;

  @SpeakeasyMetadata()
  freeTierEligible?: boolean;

  @SpeakeasyMetadata()
  gpuInfo?: GpuInfo;

  @SpeakeasyMetadata()
  hibernationSupported?: boolean;

  @SpeakeasyMetadata()
  hypervisor?: InstanceTypeHypervisorEnum;

  @SpeakeasyMetadata()
  inferenceAcceleratorInfo?: InferenceAcceleratorInfo;

  @SpeakeasyMetadata()
  instanceStorageInfo?: InstanceStorageInfo;

  @SpeakeasyMetadata()
  instanceStorageSupported?: boolean;

  @SpeakeasyMetadata()
  instanceType?: InstanceTypeEnum;

  @SpeakeasyMetadata()
  memoryInfo?: MemoryInfo;

  @SpeakeasyMetadata()
  networkInfo?: NetworkInfo;

  @SpeakeasyMetadata()
  placementGroupInfo?: PlacementGroupInfo;

  @SpeakeasyMetadata()
  processorInfo?: ProcessorInfo;

  @SpeakeasyMetadata()
  supportedBootModes?: BootModeTypeEnum[];

  @SpeakeasyMetadata()
  supportedRootDeviceTypes?: RootDeviceTypeEnum[];

  @SpeakeasyMetadata()
  supportedUsageClasses?: UsageClassTypeEnum[];

  @SpeakeasyMetadata()
  supportedVirtualizationTypes?: VirtualizationTypeEnum[];

  @SpeakeasyMetadata()
  vCpuInfo?: VCpuInfo;
}
