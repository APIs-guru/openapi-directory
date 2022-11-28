import { SpeakeasyBase } from "../../../internal/utils";
import { GpuDeviceMemoryInfo } from "./gpudevicememoryinfo";
/**
 * Describes the GPU accelerators for the instance type.
**/
export declare class GpuDeviceInfo extends SpeakeasyBase {
    count?: number;
    manufacturer?: string;
    memoryInfo?: GpuDeviceMemoryInfo;
    name?: string;
}
