import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DnsEntry } from "./dnsentry";
import { StateEnum } from "./stateenum";



// VpcEndpointConnection
/** 
 * Describes a VPC endpoint connection to a service.
**/
export class VpcEndpointConnection extends SpeakeasyBase {
  @SpeakeasyMetadata()
  creationTimestamp?: Date;

  @SpeakeasyMetadata({ elemType: DnsEntry })
  dnsEntries?: DnsEntry[];

  @SpeakeasyMetadata()
  gatewayLoadBalancerArns?: string[];

  @SpeakeasyMetadata()
  networkLoadBalancerArns?: string[];

  @SpeakeasyMetadata()
  serviceId?: string;

  @SpeakeasyMetadata()
  vpcEndpointId?: string;

  @SpeakeasyMetadata()
  vpcEndpointOwner?: string;

  @SpeakeasyMetadata()
  vpcEndpointState?: StateEnum;
}
