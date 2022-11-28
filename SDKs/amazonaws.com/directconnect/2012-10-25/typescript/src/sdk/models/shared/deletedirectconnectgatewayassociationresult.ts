import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DirectConnectGatewayAssociation } from "./directconnectgatewayassociation";



export class DeleteDirectConnectGatewayAssociationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directConnectGatewayAssociation" })
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
}
