import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGateway } from "./transitgateway";



export class CreateTransitGatewayResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  transitGateway?: TransitGateway;
}
