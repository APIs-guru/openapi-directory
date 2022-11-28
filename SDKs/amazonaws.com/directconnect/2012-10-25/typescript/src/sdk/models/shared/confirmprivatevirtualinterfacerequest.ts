import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConfirmPrivateVirtualInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directConnectGatewayId" })
  directConnectGatewayId?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualGatewayId" })
  virtualGatewayId?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualInterfaceId" })
  virtualInterfaceId: string;
}
