import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessLog } from "./accesslog";


// Logging
/** 
 * An object that represents the logging information for a virtual node.
**/
export class Logging extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessLog" })
  accessLog?: AccessLog;
}
