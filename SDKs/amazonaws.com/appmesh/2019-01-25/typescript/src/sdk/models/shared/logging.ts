import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessLog } from "./accesslog";



// Logging
/** 
 * An object that represents the logging information for a virtual node.
**/
export class Logging extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessLog" })
  accessLog?: AccessLog;
}
