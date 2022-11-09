import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssociatedGateway } from "./associatedgateway";
import { RouteFilterPrefix } from "./routefilterprefix";
import { DirectConnectGatewayAssociationProposalStateEnum } from "./directconnectgatewayassociationproposalstateenum";
import { RouteFilterPrefix } from "./routefilterprefix";


// DirectConnectGatewayAssociationProposal
/** 
 * Information about the proposal request to attach a virtual private gateway to a Direct Connect gateway. 
**/
export class DirectConnectGatewayAssociationProposal extends SpeakeasyBase {
  @Metadata({ data: "json, name=associatedGateway" })
  associatedGateway?: AssociatedGateway;

  @Metadata({ data: "json, name=directConnectGatewayId" })
  directConnectGatewayId?: string;

  @Metadata({ data: "json, name=directConnectGatewayOwnerAccount" })
  directConnectGatewayOwnerAccount?: string;

  @Metadata({ data: "json, name=existingAllowedPrefixesToDirectConnectGateway", elemType: shared.RouteFilterPrefix })
  existingAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];

  @Metadata({ data: "json, name=proposalId" })
  proposalId?: string;

  @Metadata({ data: "json, name=proposalState" })
  proposalState?: DirectConnectGatewayAssociationProposalStateEnum;

  @Metadata({ data: "json, name=requestedAllowedPrefixesToDirectConnectGateway", elemType: shared.RouteFilterPrefix })
  requestedAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
}
