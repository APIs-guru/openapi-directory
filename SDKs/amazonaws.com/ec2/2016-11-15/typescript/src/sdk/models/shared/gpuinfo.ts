import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GpuDeviceInfo } from "./gpudeviceinfo";



// GpuInfo
/** 
 * Describes the GPU accelerators for the instance type.
**/
export class GpuInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GpuDeviceInfo })
  gpus?: GpuDeviceInfo[];

  @SpeakeasyMetadata()
  totalGpuMemoryInMiB?: number;
}
