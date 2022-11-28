import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonitoringStateEnum } from "./monitoringstateenum";



// Monitoring
/** 
 * Describes the monitoring of an instance.
**/
export class Monitoring extends SpeakeasyBase {
  @SpeakeasyMetadata()
  state?: MonitoringStateEnum;
}
