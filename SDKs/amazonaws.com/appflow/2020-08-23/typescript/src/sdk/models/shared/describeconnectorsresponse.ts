import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectorConfiguration } from "./connectorconfiguration";



export class DescribeConnectorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectorConfigurations", elemType: ConnectorConfiguration })
  connectorConfigurations?: Map<string, ConnectorConfiguration>;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
