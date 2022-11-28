import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RouteFilterPrefix } from "./routefilterprefix";



export class CreateDirectConnectGatewayAssociationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addAllowedPrefixesToDirectConnectGateway", elemType: RouteFilterPrefix })
  addAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];

  @SpeakeasyMetadata({ data: "json, name=directConnectGatewayId" })
  directConnectGatewayId: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayId" })
  gatewayId?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualGatewayId" })
  virtualGatewayId?: string;
}
