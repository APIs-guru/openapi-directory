import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorConfiguration } from "./connectorconfiguration";
export declare class DescribeConnectorsResponse extends SpeakeasyBase {
    connectorConfigurations?: Map<string, ConnectorConfiguration>;
    nextToken?: string;
}
