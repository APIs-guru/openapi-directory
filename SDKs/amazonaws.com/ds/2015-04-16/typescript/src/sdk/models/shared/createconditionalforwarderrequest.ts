import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateConditionalForwarderRequest
/** 
 * Initiates the creation of a conditional forwarder for your Directory Service for Microsoft Active Directory. Conditional forwarders are required in order to set up a trust relationship with another domain.
**/
export class CreateConditionalForwarderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "json, name=DnsIpAddrs" })
  dnsIpAddrs: string[];

  @Metadata({ data: "json, name=RemoteDomainName" })
  remoteDomainName: string;
}
