import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RouteFilterPrefix } from "./routefilterprefix";



export class AcceptDirectConnectGatewayAssociationProposalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associatedGatewayOwnerAccount" })
  associatedGatewayOwnerAccount: string;

  @SpeakeasyMetadata({ data: "json, name=directConnectGatewayId" })
  directConnectGatewayId: string;

  @SpeakeasyMetadata({ data: "json, name=overrideAllowedPrefixesToDirectConnectGateway", elemType: RouteFilterPrefix })
  overrideAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];

  @SpeakeasyMetadata({ data: "json, name=proposalId" })
  proposalId: string;
}
