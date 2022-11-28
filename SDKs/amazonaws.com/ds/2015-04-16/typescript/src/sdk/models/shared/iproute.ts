import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IpRoute
/** 
 * IP address block. This is often the address block of the DNS server used for your self-managed domain. 
**/
export class IpRoute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CidrIp" })
  cidrIp?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;
}
