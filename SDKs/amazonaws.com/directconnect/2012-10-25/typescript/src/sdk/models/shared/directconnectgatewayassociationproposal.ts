import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociatedGateway } from "./associatedgateway";
import { RouteFilterPrefix } from "./routefilterprefix";
import { DirectConnectGatewayAssociationProposalStateEnum } from "./directconnectgatewayassociationproposalstateenum";



// DirectConnectGatewayAssociationProposal
/** 
 * Information about the proposal request to attach a virtual private gateway to a Direct Connect gateway. 
**/
export class DirectConnectGatewayAssociationProposal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associatedGateway" })
  associatedGateway?: AssociatedGateway;

  @SpeakeasyMetadata({ data: "json, name=directConnectGatewayId" })
  directConnectGatewayId?: string;

  @SpeakeasyMetadata({ data: "json, name=directConnectGatewayOwnerAccount" })
  directConnectGatewayOwnerAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=existingAllowedPrefixesToDirectConnectGateway", elemType: RouteFilterPrefix })
  existingAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];

  @SpeakeasyMetadata({ data: "json, name=proposalId" })
  proposalId?: string;

  @SpeakeasyMetadata({ data: "json, name=proposalState" })
  proposalState?: DirectConnectGatewayAssociationProposalStateEnum;

  @SpeakeasyMetadata({ data: "json, name=requestedAllowedPrefixesToDirectConnectGateway", elemType: RouteFilterPrefix })
  requestedAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
}
