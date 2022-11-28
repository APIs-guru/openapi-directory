import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NatGateway } from "./natgateway";



export class CreateNatGatewayResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientToken?: string;

  @SpeakeasyMetadata()
  natGateway?: NatGateway;
}
