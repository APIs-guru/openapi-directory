import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConfirmTransitVirtualInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directConnectGatewayId" })
  directConnectGatewayId: string;

  @SpeakeasyMetadata({ data: "json, name=virtualInterfaceId" })
  virtualInterfaceId: string;
}
