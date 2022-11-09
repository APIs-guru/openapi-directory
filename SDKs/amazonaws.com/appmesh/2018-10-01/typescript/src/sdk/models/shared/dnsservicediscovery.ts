import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DnsServiceDiscovery
/** 
 * The DNS service discovery information for your virtual node.
**/
export class DnsServiceDiscovery extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
