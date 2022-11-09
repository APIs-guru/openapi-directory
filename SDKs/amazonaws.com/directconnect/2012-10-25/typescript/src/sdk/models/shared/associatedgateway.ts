import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GatewayTypeEnum } from "./gatewaytypeenum";


// AssociatedGateway
/** 
 * Information about the associated gateway.
**/
export class AssociatedGateway extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=ownerAccount" })
  ownerAccount?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=type" })
  type?: GatewayTypeEnum;
}
