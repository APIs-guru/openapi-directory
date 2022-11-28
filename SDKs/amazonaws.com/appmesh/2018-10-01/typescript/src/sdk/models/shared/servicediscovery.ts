import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DnsServiceDiscovery } from "./dnsservicediscovery";



// ServiceDiscovery
/** 
 * An object representing the service discovery information for a virtual node.
**/
export class ServiceDiscovery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dns" })
  dns?: DnsServiceDiscovery;
}
