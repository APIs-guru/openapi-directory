import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorEntity } from "./connectorentity";
export declare class ListConnectorEntitiesResponse extends SpeakeasyBase {
    connectorEntityMap: Map<string, ConnectorEntity[]>;
}
