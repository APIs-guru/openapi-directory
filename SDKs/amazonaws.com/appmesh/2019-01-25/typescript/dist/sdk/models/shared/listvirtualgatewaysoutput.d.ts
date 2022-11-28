import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayRef } from "./virtualgatewayref";
export declare class ListVirtualGatewaysOutput extends SpeakeasyBase {
    nextToken?: string;
    virtualGateways: VirtualGatewayRef[];
}
