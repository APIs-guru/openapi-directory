import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDirectConnectGatewayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directConnectGatewayId" })
  directConnectGatewayId: string;
}
