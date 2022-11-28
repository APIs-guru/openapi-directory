import { SpeakeasyBase } from "../../../internal/utils";
import { AwsCloudMapServiceDiscovery } from "./awscloudmapservicediscovery";
import { DnsServiceDiscovery } from "./dnsservicediscovery";
/**
 * An object that represents the service discovery information for a virtual node.
**/
export declare class ServiceDiscovery extends SpeakeasyBase {
    awsCloudMap?: AwsCloudMapServiceDiscovery;
    dns?: DnsServiceDiscovery;
}
