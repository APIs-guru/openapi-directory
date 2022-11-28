import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGateway } from "./transitgateway";



export class ModifyTransitGatewayResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  transitGateway?: TransitGateway;
}
