import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CpuUtilization
/** 
 * CPU utilization metrics for an instance.
**/
export class CpuUtilization extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ioWait?: number;

  @SpeakeasyMetadata()
  irq?: number;

  @SpeakeasyMetadata()
  idle?: number;

  @SpeakeasyMetadata()
  nice?: number;

  @SpeakeasyMetadata()
  privileged?: number;

  @SpeakeasyMetadata()
  softIrq?: number;

  @SpeakeasyMetadata()
  system?: number;

  @SpeakeasyMetadata()
  user?: number;
}
