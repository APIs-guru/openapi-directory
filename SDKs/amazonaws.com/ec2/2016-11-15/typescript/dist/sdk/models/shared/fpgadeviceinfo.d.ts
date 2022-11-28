import { SpeakeasyBase } from "../../../internal/utils";
import { FpgaDeviceMemoryInfo } from "./fpgadevicememoryinfo";
/**
 * Describes the FPGA accelerator for the instance type.
**/
export declare class FpgaDeviceInfo extends SpeakeasyBase {
    count?: number;
    manufacturer?: string;
    memoryInfo?: FpgaDeviceMemoryInfo;
    name?: string;
}
