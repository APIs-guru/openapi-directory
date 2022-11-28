import { SpeakeasyBase } from "../../../internal/utils";
import { FpgaDeviceInfo } from "./fpgadeviceinfo";
/**
 * Describes the FPGAs for the instance type.
**/
export declare class FpgaInfo extends SpeakeasyBase {
    fpgas?: FpgaDeviceInfo[];
    totalFpgaMemoryInMiB?: number;
}
