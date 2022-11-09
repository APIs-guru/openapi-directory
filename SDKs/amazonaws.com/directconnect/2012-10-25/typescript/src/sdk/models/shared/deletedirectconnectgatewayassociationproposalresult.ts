import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DirectConnectGatewayAssociationProposal } from "./directconnectgatewayassociationproposal";


export class DeleteDirectConnectGatewayAssociationProposalResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=directConnectGatewayAssociationProposal" })
  directConnectGatewayAssociationProposal?: DirectConnectGatewayAssociationProposal;
}
