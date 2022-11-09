import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RouteFilterPrefix } from "./routefilterprefix";
import { RouteFilterPrefix } from "./routefilterprefix";


export class CreateDirectConnectGatewayAssociationProposalRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=addAllowedPrefixesToDirectConnectGateway", elemType: shared.RouteFilterPrefix })
  addAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];

  @Metadata({ data: "json, name=directConnectGatewayId" })
  directConnectGatewayId: string;

  @Metadata({ data: "json, name=directConnectGatewayOwnerAccount" })
  directConnectGatewayOwnerAccount: string;

  @Metadata({ data: "json, name=gatewayId" })
  gatewayId: string;

  @Metadata({ data: "json, name=removeAllowedPrefixesToDirectConnectGateway", elemType: shared.RouteFilterPrefix })
  removeAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
}
