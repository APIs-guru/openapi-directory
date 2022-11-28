import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayFileAccessLog } from "./virtualgatewayfileaccesslog";



// VirtualGatewayAccessLog
/** 
 * The access log configuration for a virtual gateway.
**/
export class VirtualGatewayAccessLog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=file" })
  file?: VirtualGatewayFileAccessLog;
}
