import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Inventory data for installed discovery connectors.
**/
export declare class CustomerConnectorInfo extends SpeakeasyBase {
    activeConnectors: number;
    blackListedConnectors: number;
    healthyConnectors: number;
    shutdownConnectors: number;
    totalConnectors: number;
    unhealthyConnectors: number;
    unknownConnectors: number;
}
