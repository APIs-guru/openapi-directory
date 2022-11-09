import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DirectConnectGatewayAssociation } from "./directconnectgatewayassociation";


export class UpdateDirectConnectGatewayAssociationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=directConnectGatewayAssociation" })
  directConnectGatewayAssociation?: DirectConnectGatewayAssociation;
}
