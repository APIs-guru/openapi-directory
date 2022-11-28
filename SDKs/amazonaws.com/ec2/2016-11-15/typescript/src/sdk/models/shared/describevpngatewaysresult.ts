import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpnGateway } from "./vpngateway";



// DescribeVpnGatewaysResult
/** 
 * Contains the output of DescribeVpnGateways.
**/
export class DescribeVpnGatewaysResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: VpnGateway })
  vpnGateways?: VpnGateway[];
}
