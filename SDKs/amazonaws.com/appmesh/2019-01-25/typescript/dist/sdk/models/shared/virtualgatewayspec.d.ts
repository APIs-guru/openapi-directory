import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayBackendDefaults } from "./virtualgatewaybackenddefaults";
import { VirtualGatewayListener } from "./virtualgatewaylistener";
import { VirtualGatewayLogging } from "./virtualgatewaylogging";
/**
 * An object that represents the specification of a service mesh resource.
**/
export declare class VirtualGatewaySpec extends SpeakeasyBase {
    backendDefaults?: VirtualGatewayBackendDefaults;
    listeners: VirtualGatewayListener[];
    logging?: VirtualGatewayLogging;
}
