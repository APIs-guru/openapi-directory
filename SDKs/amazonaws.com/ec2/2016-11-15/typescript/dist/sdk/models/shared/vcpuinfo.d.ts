import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the vCPU configurations for the instance type.
**/
export declare class VCpuInfo extends SpeakeasyBase {
    defaultCores?: number;
    defaultThreadsPerCore?: number;
    defaultVCpus?: number;
    validCores?: number[];
    validThreadsPerCore?: number[];
}
