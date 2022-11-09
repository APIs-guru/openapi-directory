import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualGatewayStatusCodeEnum } from "./virtualgatewaystatuscodeenum";


// VirtualGatewayStatus
/** 
 * An object that represents the status of the mesh resource.
**/
export class VirtualGatewayStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status: VirtualGatewayStatusCodeEnum;
}
