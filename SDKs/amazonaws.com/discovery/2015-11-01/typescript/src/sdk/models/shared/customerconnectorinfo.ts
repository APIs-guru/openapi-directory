import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomerConnectorInfo
/** 
 * Inventory data for installed discovery connectors.
**/
export class CustomerConnectorInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeConnectors" })
  activeConnectors: number;

  @Metadata({ data: "json, name=blackListedConnectors" })
  blackListedConnectors: number;

  @Metadata({ data: "json, name=healthyConnectors" })
  healthyConnectors: number;

  @Metadata({ data: "json, name=shutdownConnectors" })
  shutdownConnectors: number;

  @Metadata({ data: "json, name=totalConnectors" })
  totalConnectors: number;

  @Metadata({ data: "json, name=unhealthyConnectors" })
  unhealthyConnectors: number;

  @Metadata({ data: "json, name=unknownConnectors" })
  unknownConnectors: number;
}
