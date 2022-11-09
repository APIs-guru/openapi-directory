import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DirectConnectGatewayAssociationProposal } from "./directconnectgatewayassociationproposal";


export class DescribeDirectConnectGatewayAssociationProposalsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=directConnectGatewayAssociationProposals", elemType: shared.DirectConnectGatewayAssociationProposal })
  directConnectGatewayAssociationProposals?: DirectConnectGatewayAssociationProposal[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
