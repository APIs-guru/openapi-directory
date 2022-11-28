import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GpuDeviceMemoryInfo } from "./gpudevicememoryinfo";



// GpuDeviceInfo
/** 
 * Describes the GPU accelerators for the instance type.
**/
export class GpuDeviceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  count?: number;

  @SpeakeasyMetadata()
  manufacturer?: string;

  @SpeakeasyMetadata()
  memoryInfo?: GpuDeviceMemoryInfo;

  @SpeakeasyMetadata()
  name?: string;
}
