import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EgressOnlyInternetGateway } from "./egressonlyinternetgateway";



export class CreateEgressOnlyInternetGatewayResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientToken?: string;

  @SpeakeasyMetadata()
  egressOnlyInternetGateway?: EgressOnlyInternetGateway;
}
