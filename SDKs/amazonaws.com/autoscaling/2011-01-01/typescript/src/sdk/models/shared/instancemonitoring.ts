import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceMonitoring
/** 
 * Describes whether detailed monitoring is enabled for the Auto Scaling instances.
**/
export class InstanceMonitoring extends SpeakeasyBase {
  @SpeakeasyMetadata()
  enabled?: boolean;
}
