import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectorTypeEnum } from "./connectortypeenum";
import { DestinationConnectorProperties } from "./destinationconnectorproperties";


// DestinationFlowConfig
/** 
 *  Contains information about the configuration of destination connectors present in the flow. 
**/
export class DestinationFlowConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectorProfileName" })
  connectorProfileName?: string;

  @Metadata({ data: "json, name=connectorType" })
  connectorType: ConnectorTypeEnum;

  @Metadata({ data: "json, name=destinationConnectorProperties" })
  destinationConnectorProperties: DestinationConnectorProperties;
}
