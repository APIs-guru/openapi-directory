import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualGatewayAccessLog } from "./virtualgatewayaccesslog";


// VirtualGatewayLogging
/** 
 * An object that represents logging information.
**/
export class VirtualGatewayLogging extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessLog" })
  accessLog?: VirtualGatewayAccessLog;
}
