import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Connector
/** 
 * Information about a connector. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
**/
export class Connector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectorArn" })
  connectorArn: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;
}
