import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DirectConnectGatewayAssociation } from "./directconnectgatewayassociation";


export class DeleteDirectConnectGatewayAssociationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=directConnectGatewayAssociation" })
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
}
