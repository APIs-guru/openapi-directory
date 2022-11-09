import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Connector } from "./connector";


// ConnectorDefinitionVersion
/** 
 * Information about the connector definition version, which is a container for connectors.
**/
export class ConnectorDefinitionVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=Connectors", elemType: shared.Connector })
  connectors?: Connector[];
}
