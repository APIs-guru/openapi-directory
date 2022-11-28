import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayAccessLog } from "./virtualgatewayaccesslog";



// VirtualGatewayLogging
/** 
 * An object that represents logging information.
**/
export class VirtualGatewayLogging extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessLog" })
  accessLog?: VirtualGatewayAccessLog;
}
