import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RouteFilterPrefix } from "./routefilterprefix";



export class UpdateDirectConnectGatewayAssociationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addAllowedPrefixesToDirectConnectGateway", elemType: RouteFilterPrefix })
  addAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];

  @SpeakeasyMetadata({ data: "json, name=associationId" })
  associationId?: string;

  @SpeakeasyMetadata({ data: "json, name=removeAllowedPrefixesToDirectConnectGateway", elemType: RouteFilterPrefix })
  removeAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
}
