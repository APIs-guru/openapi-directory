import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrivateDnsNameConfiguration } from "./privatednsnameconfiguration";
import { ServiceStateEnum } from "./servicestateenum";
import { ServiceTypeDetail } from "./servicetypedetail";
import { Tag } from "./tag";



// ServiceConfiguration
/** 
 * Describes a service configuration for a VPC endpoint service.
**/
export class ServiceConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceptanceRequired?: boolean;

  @SpeakeasyMetadata()
  availabilityZones?: string[];

  @SpeakeasyMetadata()
  baseEndpointDnsNames?: string[];

  @SpeakeasyMetadata()
  gatewayLoadBalancerArns?: string[];

  @SpeakeasyMetadata()
  managesVpcEndpoints?: boolean;

  @SpeakeasyMetadata()
  networkLoadBalancerArns?: string[];

  @SpeakeasyMetadata()
  privateDnsName?: string;

  @SpeakeasyMetadata()
  privateDnsNameConfiguration?: PrivateDnsNameConfiguration;

  @SpeakeasyMetadata()
  serviceId?: string;

  @SpeakeasyMetadata()
  serviceName?: string;

  @SpeakeasyMetadata()
  serviceState?: ServiceStateEnum;

  @SpeakeasyMetadata({ elemType: ServiceTypeDetail })
  serviceType?: ServiceTypeDetail[];

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
