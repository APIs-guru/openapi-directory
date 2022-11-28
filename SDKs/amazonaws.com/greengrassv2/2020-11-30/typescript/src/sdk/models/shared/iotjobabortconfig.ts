import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IoTJobAbortCriteria } from "./iotjobabortcriteria";



// IoTJobAbortConfig
/** 
 * Contains a list of criteria that define when and how to cancel a configuration deployment.
**/
export class IoTJobAbortConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=criteriaList", elemType: IoTJobAbortCriteria })
  criteriaList: IoTJobAbortCriteria[];
}
