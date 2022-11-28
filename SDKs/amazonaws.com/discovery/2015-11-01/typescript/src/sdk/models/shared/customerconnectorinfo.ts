import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomerConnectorInfo
/** 
 * Inventory data for installed discovery connectors.
**/
export class CustomerConnectorInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeConnectors" })
  activeConnectors: number;

  @SpeakeasyMetadata({ data: "json, name=blackListedConnectors" })
  blackListedConnectors: number;

  @SpeakeasyMetadata({ data: "json, name=healthyConnectors" })
  healthyConnectors: number;

  @SpeakeasyMetadata({ data: "json, name=shutdownConnectors" })
  shutdownConnectors: number;

  @SpeakeasyMetadata({ data: "json, name=totalConnectors" })
  totalConnectors: number;

  @SpeakeasyMetadata({ data: "json, name=unhealthyConnectors" })
  unhealthyConnectors: number;

  @SpeakeasyMetadata({ data: "json, name=unknownConnectors" })
  unknownConnectors: number;
}
