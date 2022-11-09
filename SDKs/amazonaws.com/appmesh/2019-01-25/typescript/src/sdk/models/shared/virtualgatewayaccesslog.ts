import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualGatewayFileAccessLog } from "./virtualgatewayfileaccesslog";


// VirtualGatewayAccessLog
/** 
 * The access log configuration for a virtual gateway.
**/
export class VirtualGatewayAccessLog extends SpeakeasyBase {
  @Metadata({ data: "json, name=file" })
  file?: VirtualGatewayFileAccessLog;
}
