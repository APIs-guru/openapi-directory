import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConnectorEntity } from "./connectorentity";


export class ListConnectorEntitiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectorEntityMap", elemType: shared.ConnectorEntity, elemDepth: 2 })
  connectorEntityMap: Map<string, ConnectorEntity[]>;
}
