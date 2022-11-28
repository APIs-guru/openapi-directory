import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackendServerDescription } from "./backendserverdescription";
import { HealthCheck } from "./healthcheck";
import { Instance } from "./instance";
import { ListenerDescription } from "./listenerdescription";
import { Policies } from "./policies";
import { SourceSecurityGroup } from "./sourcesecuritygroup";



// LoadBalancerDescription
/** 
 * Information about a load balancer.
**/
export class LoadBalancerDescription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityZones?: string[];

  @SpeakeasyMetadata({ elemType: BackendServerDescription })
  backendServerDescriptions?: BackendServerDescription[];

  @SpeakeasyMetadata()
  canonicalHostedZoneName?: string;

  @SpeakeasyMetadata()
  canonicalHostedZoneNameId?: string;

  @SpeakeasyMetadata()
  createdTime?: Date;

  @SpeakeasyMetadata()
  dnsName?: string;

  @SpeakeasyMetadata()
  healthCheck?: HealthCheck;

  @SpeakeasyMetadata({ elemType: Instance })
  instances?: Instance[];

  @SpeakeasyMetadata({ elemType: ListenerDescription })
  listenerDescriptions?: ListenerDescription[];

  @SpeakeasyMetadata()
  loadBalancerName?: string;

  @SpeakeasyMetadata()
  policies?: Policies;

  @SpeakeasyMetadata()
  scheme?: string;

  @SpeakeasyMetadata()
  securityGroups?: string[];

  @SpeakeasyMetadata()
  sourceSecurityGroup?: SourceSecurityGroup;

  @SpeakeasyMetadata()
  subnets?: string[];

  @SpeakeasyMetadata()
  vpcId?: string;
}
