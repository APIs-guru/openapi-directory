import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DnsNameStateEnum } from "./dnsnamestateenum";
import { PrivateDnsDetails } from "./privatednsdetails";
import { ServiceTypeDetail } from "./servicetypedetail";
import { Tag } from "./tag";



// ServiceDetail
/** 
 * Describes a VPC endpoint service.
**/
export class ServiceDetail extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceptanceRequired?: boolean;

  @SpeakeasyMetadata()
  availabilityZones?: string[];

  @SpeakeasyMetadata()
  baseEndpointDnsNames?: string[];

  @SpeakeasyMetadata()
  managesVpcEndpoints?: boolean;

  @SpeakeasyMetadata()
  owner?: string;

  @SpeakeasyMetadata()
  privateDnsName?: string;

  @SpeakeasyMetadata()
  privateDnsNameVerificationState?: DnsNameStateEnum;

  @SpeakeasyMetadata({ elemType: PrivateDnsDetails })
  privateDnsNames?: PrivateDnsDetails[];

  @SpeakeasyMetadata()
  serviceId?: string;

  @SpeakeasyMetadata()
  serviceName?: string;

  @SpeakeasyMetadata({ elemType: ServiceTypeDetail })
  serviceType?: ServiceTypeDetail[];

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  vpcEndpointPolicySupported?: boolean;
}
