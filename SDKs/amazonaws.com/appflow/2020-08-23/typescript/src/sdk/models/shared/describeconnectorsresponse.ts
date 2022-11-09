import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConnectorConfiguration } from "./connectorconfiguration";


export class DescribeConnectorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectorConfigurations", elemType: shared.ConnectorConfiguration })
  connectorConfigurations?: Map<string, ConnectorConfiguration>;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
