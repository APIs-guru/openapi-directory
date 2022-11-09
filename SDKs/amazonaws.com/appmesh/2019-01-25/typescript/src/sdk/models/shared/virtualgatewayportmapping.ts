import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualGatewayPortProtocolEnum } from "./virtualgatewayportprotocolenum";


// VirtualGatewayPortMapping
/** 
 * An object that represents a port mapping.
**/
export class VirtualGatewayPortMapping extends SpeakeasyBase {
  @Metadata({ data: "json, name=port" })
  port: number;

  @Metadata({ data: "json, name=protocol" })
  protocol: VirtualGatewayPortProtocolEnum;
}
