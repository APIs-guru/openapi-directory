import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConfirmPrivateVirtualInterfaceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=directConnectGatewayId" })
  directConnectGatewayId?: string;

  @Metadata({ data: "json, name=virtualGatewayId" })
  virtualGatewayId?: string;

  @Metadata({ data: "json, name=virtualInterfaceId" })
  virtualInterfaceId: string;
}
