import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectorTypeEnum } from "./connectortypeenum";
import { DestinationConnectorProperties } from "./destinationconnectorproperties";



// DestinationFlowConfig
/** 
 *  Contains information about the configuration of destination connectors present in the flow. 
**/
export class DestinationFlowConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectorProfileName" })
  connectorProfileName?: string;

  @SpeakeasyMetadata({ data: "json, name=connectorType" })
  connectorType: ConnectorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=destinationConnectorProperties" })
  destinationConnectorProperties: DestinationConnectorProperties;
}
