import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DirectConnectGateway } from "./directconnectgateway";



export class DeleteDirectConnectGatewayResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directConnectGateway" })
  directConnectGateway?: DirectConnectGateway;
}
