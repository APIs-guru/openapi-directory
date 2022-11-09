import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DirectConnectGatewayAssociation } from "./directconnectgatewayassociation";


export class DescribeDirectConnectGatewayAssociationsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=directConnectGatewayAssociations", elemType: shared.DirectConnectGatewayAssociation })
  directConnectGatewayAssociations?: DirectConnectGatewayAssociation[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
