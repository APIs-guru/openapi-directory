import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GatewayRouteRef
/** 
 * An object that represents a gateway route returned by a list operation.
**/
export class GatewayRouteRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=gatewayRouteName" })
  gatewayRouteName: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=meshName" })
  meshName: string;

  @SpeakeasyMetadata({ data: "json, name=meshOwner" })
  meshOwner: string;

  @SpeakeasyMetadata({ data: "json, name=resourceOwner" })
  resourceOwner: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: number;

  @SpeakeasyMetadata({ data: "json, name=virtualGatewayName" })
  virtualGatewayName: string;
}
