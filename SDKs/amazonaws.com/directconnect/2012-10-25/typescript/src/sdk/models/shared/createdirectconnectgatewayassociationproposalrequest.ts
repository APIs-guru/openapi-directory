import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RouteFilterPrefix } from "./routefilterprefix";



export class CreateDirectConnectGatewayAssociationProposalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addAllowedPrefixesToDirectConnectGateway", elemType: RouteFilterPrefix })
  addAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];

  @SpeakeasyMetadata({ data: "json, name=directConnectGatewayId" })
  directConnectGatewayId: string;

  @SpeakeasyMetadata({ data: "json, name=directConnectGatewayOwnerAccount" })
  directConnectGatewayOwnerAccount: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayId" })
  gatewayId: string;

  @SpeakeasyMetadata({ data: "json, name=removeAllowedPrefixesToDirectConnectGateway", elemType: RouteFilterPrefix })
  removeAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
}
