import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GatewayTypeEnum } from "./gatewaytypeenum";



// AssociatedGateway
/** 
 * Information about the associated gateway.
**/
export class AssociatedGateway extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerAccount" })
  ownerAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GatewayTypeEnum;
}
