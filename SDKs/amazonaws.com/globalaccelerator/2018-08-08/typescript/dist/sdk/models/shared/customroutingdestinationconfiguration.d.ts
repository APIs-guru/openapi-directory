import { SpeakeasyBase } from "../../../internal/utils";
import { CustomRoutingProtocolEnum } from "./customroutingprotocolenum";
/**
 * For a custom routing accelerator, sets the port range and protocol for all endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on.
**/
export declare class CustomRoutingDestinationConfiguration extends SpeakeasyBase {
    fromPort: number;
    protocols: CustomRoutingProtocolEnum[];
    toPort: number;
}
