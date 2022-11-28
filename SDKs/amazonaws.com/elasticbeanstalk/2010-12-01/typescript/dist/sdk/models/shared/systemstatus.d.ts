import { SpeakeasyBase } from "../../../internal/utils";
import { CpuUtilization } from "./cpuutilization";
/**
 * CPU utilization and load average metrics for an Amazon EC2 instance.
**/
export declare class SystemStatus extends SpeakeasyBase {
    cpuUtilization?: CpuUtilization;
    loadAverage?: number[];
}
