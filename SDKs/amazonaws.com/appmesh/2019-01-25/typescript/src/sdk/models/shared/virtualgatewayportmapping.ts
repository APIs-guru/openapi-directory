import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayPortProtocolEnum } from "./virtualgatewayportprotocolenum";



// VirtualGatewayPortMapping
/** 
 * An object that represents a port mapping.
**/
export class VirtualGatewayPortMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=port" })
  port: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: VirtualGatewayPortProtocolEnum;
}
