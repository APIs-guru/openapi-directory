import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGateway } from "./transitgateway";



export class DeleteTransitGatewayResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  transitGateway?: TransitGateway;
}
