import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectorEntityField } from "./connectorentityfield";



export class DescribeConnectorEntityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectorEntityFields", elemType: ConnectorEntityField })
  connectorEntityFields: ConnectorEntityField[];
}
