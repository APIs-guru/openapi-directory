import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DnsServiceDiscovery } from "./dnsservicediscovery";


// ServiceDiscovery
/** 
 * An object representing the service discovery information for a virtual node.
**/
export class ServiceDiscovery extends SpeakeasyBase {
  @Metadata({ data: "json, name=dns" })
  dns?: DnsServiceDiscovery;
}
