import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DirectConnectGatewayAssociationProposal } from "./directconnectgatewayassociationproposal";



export class DescribeDirectConnectGatewayAssociationProposalsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directConnectGatewayAssociationProposals", elemType: DirectConnectGatewayAssociationProposal })
  directConnectGatewayAssociationProposals?: DirectConnectGatewayAssociationProposal[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
