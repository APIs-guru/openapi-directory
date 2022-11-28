import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DirectConnectGatewayStateEnum } from "./directconnectgatewaystateenum";



// DirectConnectGateway
/** 
 * Information about a Direct Connect gateway, which enables you to connect virtual interfaces and virtual private gateway or transit gateways.
**/
export class DirectConnectGateway extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amazonSideAsn" })
  amazonSideAsn?: number;

  @SpeakeasyMetadata({ data: "json, name=directConnectGatewayId" })
  directConnectGatewayId?: string;

  @SpeakeasyMetadata({ data: "json, name=directConnectGatewayName" })
  directConnectGatewayName?: string;

  @SpeakeasyMetadata({ data: "json, name=directConnectGatewayState" })
  directConnectGatewayState?: DirectConnectGatewayStateEnum;

  @SpeakeasyMetadata({ data: "json, name=ownerAccount" })
  ownerAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=stateChangeError" })
  stateChangeError?: string;
}
