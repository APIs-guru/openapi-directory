import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FpgaDeviceMemoryInfo
/** 
 * Describes the memory for the FPGA accelerator for the instance type.
**/
export class FpgaDeviceMemoryInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  sizeInMiB?: number;
}
