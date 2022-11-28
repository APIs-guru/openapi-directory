import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DirectConnectGateway } from "./directconnectgateway";



export class CreateDirectConnectGatewayResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directConnectGateway" })
  directConnectGateway?: DirectConnectGateway;
}
