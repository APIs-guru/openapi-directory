import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DirectConnectGatewayAssociation } from "./directconnectgatewayassociation";



export class DescribeDirectConnectGatewayAssociationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directConnectGatewayAssociations", elemType: DirectConnectGatewayAssociation })
  directConnectGatewayAssociations?: DirectConnectGatewayAssociation[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
