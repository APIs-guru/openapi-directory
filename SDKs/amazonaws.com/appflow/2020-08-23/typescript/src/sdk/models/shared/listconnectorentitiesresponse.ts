import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectorEntity } from "./connectorentity";



export class ListConnectorEntitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectorEntityMap", elemType: ConnectorEntity, elemDepth: 2 })
  connectorEntityMap: Map<string, ConnectorEntity[]>;
}
