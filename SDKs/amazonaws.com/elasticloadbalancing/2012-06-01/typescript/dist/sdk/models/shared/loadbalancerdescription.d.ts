import { SpeakeasyBase } from "../../../internal/utils";
import { BackendServerDescription } from "./backendserverdescription";
import { HealthCheck } from "./healthcheck";
import { Instance } from "./instance";
import { ListenerDescription } from "./listenerdescription";
import { Policies } from "./policies";
import { SourceSecurityGroup } from "./sourcesecuritygroup";
/**
 * Information about a load balancer.
**/
export declare class LoadBalancerDescription extends SpeakeasyBase {
    availabilityZones?: string[];
    backendServerDescriptions?: BackendServerDescription[];
    canonicalHostedZoneName?: string;
    canonicalHostedZoneNameId?: string;
    createdTime?: Date;
    dnsName?: string;
    healthCheck?: HealthCheck;
    instances?: Instance[];
    listenerDescriptions?: ListenerDescription[];
    loadBalancerName?: string;
    policies?: Policies;
    scheme?: string;
    securityGroups?: string[];
    sourceSecurityGroup?: SourceSecurityGroup;
    subnets?: string[];
    vpcId?: string;
}
