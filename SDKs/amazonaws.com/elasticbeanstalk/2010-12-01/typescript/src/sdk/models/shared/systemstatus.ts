import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CpuUtilization } from "./cpuutilization";



// SystemStatus
/** 
 * CPU utilization and load average metrics for an Amazon EC2 instance.
**/
export class SystemStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cpuUtilization?: CpuUtilization;

  @SpeakeasyMetadata()
  loadAverage?: number[];
}
