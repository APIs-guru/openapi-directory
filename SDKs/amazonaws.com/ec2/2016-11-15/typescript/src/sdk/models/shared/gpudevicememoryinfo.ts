import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GpuDeviceMemoryInfo
/** 
 * Describes the memory available to the GPU accelerator.
**/
export class GpuDeviceMemoryInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  sizeInMiB?: number;
}
