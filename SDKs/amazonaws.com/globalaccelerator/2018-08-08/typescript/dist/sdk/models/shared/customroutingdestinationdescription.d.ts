import { SpeakeasyBase } from "../../../internal/utils";
import { ProtocolEnum } from "./protocolenum";
/**
 * For a custom routing accelerator, describes the port range and protocol for all endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on.
**/
export declare class CustomRoutingDestinationDescription extends SpeakeasyBase {
    fromPort?: number;
    protocols?: ProtocolEnum[];
    toPort?: number;
}
