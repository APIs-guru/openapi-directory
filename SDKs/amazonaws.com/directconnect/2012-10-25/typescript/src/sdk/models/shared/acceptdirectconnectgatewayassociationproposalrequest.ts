import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RouteFilterPrefix } from "./routefilterprefix";


export class AcceptDirectConnectGatewayAssociationProposalRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=associatedGatewayOwnerAccount" })
  associatedGatewayOwnerAccount: string;

  @Metadata({ data: "json, name=directConnectGatewayId" })
  directConnectGatewayId: string;

  @Metadata({ data: "json, name=overrideAllowedPrefixesToDirectConnectGateway", elemType: shared.RouteFilterPrefix })
  overrideAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];

  @Metadata({ data: "json, name=proposalId" })
  proposalId: string;
}
