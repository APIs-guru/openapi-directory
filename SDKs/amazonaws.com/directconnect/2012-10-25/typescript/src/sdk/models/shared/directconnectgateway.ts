import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DirectConnectGatewayStateEnum } from "./directconnectgatewaystateenum";


// DirectConnectGateway
/** 
 * Information about a Direct Connect gateway, which enables you to connect virtual interfaces and virtual private gateway or transit gateways.
**/
export class DirectConnectGateway extends SpeakeasyBase {
  @Metadata({ data: "json, name=amazonSideAsn" })
  amazonSideAsn?: number;

  @Metadata({ data: "json, name=directConnectGatewayId" })
  directConnectGatewayId?: string;

  @Metadata({ data: "json, name=directConnectGatewayName" })
  directConnectGatewayName?: string;

  @Metadata({ data: "json, name=directConnectGatewayState" })
  directConnectGatewayState?: DirectConnectGatewayStateEnum;

  @Metadata({ data: "json, name=ownerAccount" })
  ownerAccount?: string;

  @Metadata({ data: "json, name=stateChangeError" })
  stateChangeError?: string;
}
