import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConnectorEntityField } from "./connectorentityfield";


export class DescribeConnectorEntityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectorEntityFields", elemType: shared.ConnectorEntityField })
  connectorEntityFields: ConnectorEntityField[];
}
