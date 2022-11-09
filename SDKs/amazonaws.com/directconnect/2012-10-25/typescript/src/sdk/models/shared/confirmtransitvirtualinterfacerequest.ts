import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConfirmTransitVirtualInterfaceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=directConnectGatewayId" })
  directConnectGatewayId: string;

  @Metadata({ data: "json, name=virtualInterfaceId" })
  virtualInterfaceId: string;
}
