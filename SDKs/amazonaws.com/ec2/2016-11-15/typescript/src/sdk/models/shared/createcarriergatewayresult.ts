import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CarrierGateway } from "./carriergateway";



export class CreateCarrierGatewayResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  carrierGateway?: CarrierGateway;
}
