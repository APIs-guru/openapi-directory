import { SpeakeasyBase } from "../../../internal/utils";
import { GpuDeviceInfo } from "./gpudeviceinfo";
/**
 * Describes the GPU accelerators for the instance type.
**/
export declare class GpuInfo extends SpeakeasyBase {
    gpus?: GpuDeviceInfo[];
    totalGpuMemoryInMiB?: number;
}
