import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsCloudMapServiceDiscovery } from "./awscloudmapservicediscovery";
import { DnsServiceDiscovery } from "./dnsservicediscovery";



// ServiceDiscovery
/** 
 * An object that represents the service discovery information for a virtual node.
**/
export class ServiceDiscovery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awsCloudMap" })
  awsCloudMap?: AwsCloudMapServiceDiscovery;

  @SpeakeasyMetadata({ data: "json, name=dns" })
  dns?: DnsServiceDiscovery;
}
