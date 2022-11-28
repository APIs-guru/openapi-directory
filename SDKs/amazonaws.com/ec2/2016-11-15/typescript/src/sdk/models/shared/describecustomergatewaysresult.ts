import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerGateway } from "./customergateway";



// DescribeCustomerGatewaysResult
/** 
 * Contains the output of DescribeCustomerGateways.
**/
export class DescribeCustomerGatewaysResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CustomerGateway })
  customerGateways?: CustomerGateway[];
}
