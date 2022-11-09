import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IoTJobAbortCriteria } from "./iotjobabortcriteria";


// IoTJobAbortConfig
/** 
 * Contains a list of criteria that define when and how to cancel a configuration deployment.
**/
export class IoTJobAbortConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=criteriaList", elemType: shared.IoTJobAbortCriteria })
  criteriaList: IoTJobAbortCriteria[];
}
