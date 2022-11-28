import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorTypeEnum } from "./connectortypeenum";
import { DestinationConnectorProperties } from "./destinationconnectorproperties";
/**
 *  Contains information about the configuration of destination connectors present in the flow.
**/
export declare class DestinationFlowConfig extends SpeakeasyBase {
    connectorProfileName?: string;
    connectorType: ConnectorTypeEnum;
    destinationConnectorProperties: DestinationConnectorProperties;
}
