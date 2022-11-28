import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceMonitoring } from "./instancemonitoring";



export class UnmonitorInstancesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: InstanceMonitoring })
  instanceMonitorings?: InstanceMonitoring[];
}
