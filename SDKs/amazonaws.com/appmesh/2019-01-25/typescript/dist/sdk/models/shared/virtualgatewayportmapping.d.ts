import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayPortProtocolEnum } from "./virtualgatewayportprotocolenum";
/**
 * An object that represents a port mapping.
**/
export declare class VirtualGatewayPortMapping extends SpeakeasyBase {
    port: number;
    protocol: VirtualGatewayPortProtocolEnum;
}
