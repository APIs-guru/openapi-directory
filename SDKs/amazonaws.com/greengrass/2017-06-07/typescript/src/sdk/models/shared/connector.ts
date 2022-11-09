import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Connector
/** 
 * Information about a connector. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
**/
export class Connector extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectorArn" })
  connectorArn: string;

  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;
}
