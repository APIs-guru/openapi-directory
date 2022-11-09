import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsCloudMapServiceDiscovery } from "./awscloudmapservicediscovery";
import { DnsServiceDiscovery } from "./dnsservicediscovery";


// ServiceDiscovery
/** 
 * An object that represents the service discovery information for a virtual node.
**/
export class ServiceDiscovery extends SpeakeasyBase {
  @Metadata({ data: "json, name=awsCloudMap" })
  awsCloudMap?: AwsCloudMapServiceDiscovery;

  @Metadata({ data: "json, name=dns" })
  dns?: DnsServiceDiscovery;
}
