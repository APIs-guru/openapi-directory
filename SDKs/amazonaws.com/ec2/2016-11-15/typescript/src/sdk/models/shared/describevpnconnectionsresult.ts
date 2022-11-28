import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpnConnection } from "./vpnconnection";



// DescribeVpnConnectionsResult
/** 
 * Contains the output of DescribeVpnConnections.
**/
export class DescribeVpnConnectionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: VpnConnection })
  vpnConnections?: VpnConnection[];
}
