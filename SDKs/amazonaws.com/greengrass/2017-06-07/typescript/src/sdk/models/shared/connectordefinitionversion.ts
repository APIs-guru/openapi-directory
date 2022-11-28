import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Connector } from "./connector";



// ConnectorDefinitionVersion
/** 
 * Information about the connector definition version, which is a container for connectors.
**/
export class ConnectorDefinitionVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Connectors", elemType: Connector })
  connectors?: Connector[];
}
