import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DirectConnectGatewayAssociationProposal } from "./directconnectgatewayassociationproposal";



export class CreateDirectConnectGatewayAssociationProposalResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directConnectGatewayAssociationProposal" })
  directConnectGatewayAssociationProposal?: DirectConnectGatewayAssociationProposal;
}
