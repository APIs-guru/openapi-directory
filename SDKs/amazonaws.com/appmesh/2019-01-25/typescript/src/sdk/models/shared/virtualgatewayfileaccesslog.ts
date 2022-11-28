import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VirtualGatewayFileAccessLog
/** 
 * An object that represents an access log file.
**/
export class VirtualGatewayFileAccessLog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;
}
