import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FpgaDeviceMemoryInfo } from "./fpgadevicememoryinfo";



// FpgaDeviceInfo
/** 
 * Describes the FPGA accelerator for the instance type.
**/
export class FpgaDeviceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  count?: number;

  @SpeakeasyMetadata()
  manufacturer?: string;

  @SpeakeasyMetadata()
  memoryInfo?: FpgaDeviceMemoryInfo;

  @SpeakeasyMetadata()
  name?: string;
}
