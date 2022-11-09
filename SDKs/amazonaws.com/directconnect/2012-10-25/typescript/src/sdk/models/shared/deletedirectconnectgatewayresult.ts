import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DirectConnectGateway } from "./directconnectgateway";


export class DeleteDirectConnectGatewayResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=directConnectGateway" })
  directConnectGateway?: DirectConnectGateway;
}
