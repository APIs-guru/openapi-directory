import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InternetGateway } from "./internetgateway";



export class CreateInternetGatewayResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  internetGateway?: InternetGateway;
}
