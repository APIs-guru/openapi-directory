import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateConditionalForwarderRequest
/** 
 * Initiates the creation of a conditional forwarder for your Directory Service for Microsoft Active Directory. Conditional forwarders are required in order to set up a trust relationship with another domain.
**/
export class CreateConditionalForwarderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=DnsIpAddrs" })
  dnsIpAddrs: string[];

  @SpeakeasyMetadata({ data: "json, name=RemoteDomainName" })
  remoteDomainName: string;
}
