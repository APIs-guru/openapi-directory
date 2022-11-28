import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CarrierGateway } from "./carriergateway";



export class DeleteCarrierGatewayResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  carrierGateway?: CarrierGateway;
}
