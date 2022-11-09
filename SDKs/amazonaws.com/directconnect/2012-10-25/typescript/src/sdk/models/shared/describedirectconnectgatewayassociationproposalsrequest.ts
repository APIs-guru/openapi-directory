import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeDirectConnectGatewayAssociationProposalsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=associatedGatewayId" })
  associatedGatewayId?: string;

  @Metadata({ data: "json, name=directConnectGatewayId" })
  directConnectGatewayId?: string;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=proposalId" })
  proposalId?: string;
}
