import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerGateway } from "./customergateway";



// CreateCustomerGatewayResult
/** 
 * Contains the output of CreateCustomerGateway.
**/
export class CreateCustomerGatewayResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  customerGateway?: CustomerGateway;
}
