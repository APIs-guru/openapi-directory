import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { LoadBalancerSchemeEnumEnum } from "./loadbalancerschemeenumenum";
import { LoadBalancerState } from "./loadbalancerstate";
import { LoadBalancerTypeEnumEnum } from "./loadbalancertypeenumenum";



// LoadBalancer
/** 
 * Information about a load balancer.
**/
export class LoadBalancer extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AvailabilityZone })
  availabilityZones?: AvailabilityZone[];

  @SpeakeasyMetadata()
  canonicalHostedZoneId?: string;

  @SpeakeasyMetadata()
  createdTime?: Date;

  @SpeakeasyMetadata()
  customerOwnedIpv4Pool?: string;

  @SpeakeasyMetadata()
  dnsName?: string;

  @SpeakeasyMetadata()
  ipAddressType?: IpAddressTypeEnum;

  @SpeakeasyMetadata()
  loadBalancerArn?: string;

  @SpeakeasyMetadata()
  loadBalancerName?: string;

  @SpeakeasyMetadata()
  scheme?: LoadBalancerSchemeEnumEnum;

  @SpeakeasyMetadata()
  securityGroups?: string[];

  @SpeakeasyMetadata()
  state?: LoadBalancerState;

  @SpeakeasyMetadata()
  type?: LoadBalancerTypeEnumEnum;

  @SpeakeasyMetadata()
  vpcId?: string;
}
