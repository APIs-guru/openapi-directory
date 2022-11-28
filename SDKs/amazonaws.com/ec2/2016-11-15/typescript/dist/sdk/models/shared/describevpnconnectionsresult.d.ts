import { SpeakeasyBase } from "../../../internal/utils";
import { VpnConnection } from "./vpnconnection";
/**
 * Contains the output of DescribeVpnConnections.
**/
export declare class DescribeVpnConnectionsResult extends SpeakeasyBase {
    vpnConnections?: VpnConnection[];
}
