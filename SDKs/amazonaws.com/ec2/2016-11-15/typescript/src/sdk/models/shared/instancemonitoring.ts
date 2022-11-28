import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Monitoring } from "./monitoring";



// InstanceMonitoring
/** 
 * Describes the monitoring of an instance.
**/
export class InstanceMonitoring extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceId?: string;

  @SpeakeasyMetadata()
  monitoring?: Monitoring;
}
