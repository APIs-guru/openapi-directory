import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PendingCloudwatchLogsExports
/** 
 * A list of the log types whose configuration is still pending. These log types are in the process of being activated or deactivated.
**/
export class PendingCloudwatchLogsExports extends SpeakeasyBase {
  @SpeakeasyMetadata()
  logTypesToDisable?: string[];

  @SpeakeasyMetadata()
  logTypesToEnable?: string[];
}
