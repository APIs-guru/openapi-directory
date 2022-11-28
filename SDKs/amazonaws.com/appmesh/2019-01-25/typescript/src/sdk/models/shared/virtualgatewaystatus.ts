import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayStatusCodeEnum } from "./virtualgatewaystatuscodeenum";



// VirtualGatewayStatus
/** 
 * An object that represents the status of the mesh resource.
**/
export class VirtualGatewayStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status: VirtualGatewayStatusCodeEnum;
}
