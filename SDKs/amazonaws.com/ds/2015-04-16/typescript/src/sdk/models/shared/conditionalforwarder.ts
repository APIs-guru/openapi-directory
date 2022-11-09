import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationScopeEnum } from "./replicationscopeenum";


// ConditionalForwarder
/** 
 * Points to a remote domain with which you are setting up a trust relationship. Conditional forwarders are required in order to set up a trust relationship with another domain.
**/
export class ConditionalForwarder extends SpeakeasyBase {
  @Metadata({ data: "json, name=DnsIpAddrs" })
  dnsIpAddrs?: string[];

  @Metadata({ data: "json, name=RemoteDomainName" })
  remoteDomainName?: string;

  @Metadata({ data: "json, name=ReplicationScope" })
  replicationScope?: ReplicationScopeEnum;
}
