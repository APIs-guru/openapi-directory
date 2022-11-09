import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IpRoute
/** 
 * IP address block. This is often the address block of the DNS server used for your self-managed domain. 
**/
export class IpRoute extends SpeakeasyBase {
  @Metadata({ data: "json, name=CidrIp" })
  cidrIp?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;
}
