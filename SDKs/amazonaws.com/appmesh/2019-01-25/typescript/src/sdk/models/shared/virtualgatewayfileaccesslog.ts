import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VirtualGatewayFileAccessLog
/** 
 * An object that represents an access log file.
**/
export class VirtualGatewayFileAccessLog extends SpeakeasyBase {
  @Metadata({ data: "json, name=path" })
  path: string;
}
