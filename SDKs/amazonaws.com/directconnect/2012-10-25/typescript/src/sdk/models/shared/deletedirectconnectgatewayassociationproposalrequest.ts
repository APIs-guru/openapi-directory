import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDirectConnectGatewayAssociationProposalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=proposalId" })
  proposalId: string;
}
