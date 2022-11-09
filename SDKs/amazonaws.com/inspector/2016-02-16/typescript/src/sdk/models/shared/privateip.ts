import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PrivateIp
/** 
 * Contains information about a private IP address associated with a network interface. This data type is used as a response element in the <a>DescribeFindings</a> action.
**/
export class PrivateIp extends SpeakeasyBase {
  @Metadata({ data: "json, name=privateDnsName" })
  privateDnsName?: string;

  @Metadata({ data: "json, name=privateIpAddress" })
  privateIpAddress?: string;
}
