import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DirectConnectGateway } from "./directconnectgateway";


export class CreateDirectConnectGatewayResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=directConnectGateway" })
  directConnectGateway?: DirectConnectGateway;
}
