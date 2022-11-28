import { SpeakeasyBase } from "../../../internal/utils";
/**
 * CPU utilization metrics for an instance.
**/
export declare class CpuUtilization extends SpeakeasyBase {
    ioWait?: number;
    irq?: number;
    idle?: number;
    nice?: number;
    privileged?: number;
    softIrq?: number;
    system?: number;
    user?: number;
}
