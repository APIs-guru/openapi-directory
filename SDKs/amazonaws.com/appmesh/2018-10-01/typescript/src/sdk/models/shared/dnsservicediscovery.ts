import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DnsServiceDiscovery
/** 
 * The DNS service discovery information for your virtual node.
**/
export class DnsServiceDiscovery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
