import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationScopeEnum } from "./replicationscopeenum";
/**
 * Points to a remote domain with which you are setting up a trust relationship. Conditional forwarders are required in order to set up a trust relationship with another domain.
**/
export declare class ConditionalForwarder extends SpeakeasyBase {
    dnsIpAddrs?: string[];
    remoteDomainName?: string;
    replicationScope?: ReplicationScopeEnum;
}
