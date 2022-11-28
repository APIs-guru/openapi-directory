import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FpgaDeviceInfo } from "./fpgadeviceinfo";



// FpgaInfo
/** 
 * Describes the FPGAs for the instance type.
**/
export class FpgaInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: FpgaDeviceInfo })
  fpgas?: FpgaDeviceInfo[];

  @SpeakeasyMetadata()
  totalFpgaMemoryInMiB?: number;
}
