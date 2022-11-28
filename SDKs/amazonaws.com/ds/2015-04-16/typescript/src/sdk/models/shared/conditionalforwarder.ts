import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationScopeEnum } from "./replicationscopeenum";



// ConditionalForwarder
/** 
 * Points to a remote domain with which you are setting up a trust relationship. Conditional forwarders are required in order to set up a trust relationship with another domain.
**/
export class ConditionalForwarder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DnsIpAddrs" })
  dnsIpAddrs?: string[];

  @SpeakeasyMetadata({ data: "json, name=RemoteDomainName" })
  remoteDomainName?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationScope" })
  replicationScope?: ReplicationScopeEnum;
}
