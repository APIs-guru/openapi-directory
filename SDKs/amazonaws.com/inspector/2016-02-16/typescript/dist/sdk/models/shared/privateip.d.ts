import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about a private IP address associated with a network interface. This data type is used as a response element in the <a>DescribeFindings</a> action.
**/
export declare class PrivateIp extends SpeakeasyBase {
    privateDnsName?: string;
    privateIpAddress?: string;
}
