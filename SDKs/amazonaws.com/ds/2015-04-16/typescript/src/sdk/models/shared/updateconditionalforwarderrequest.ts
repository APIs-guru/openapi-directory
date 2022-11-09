import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateConditionalForwarderRequest
/** 
 * Updates a conditional forwarder.
**/
export class UpdateConditionalForwarderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "json, name=DnsIpAddrs" })
  dnsIpAddrs: string[];

  @Metadata({ data: "json, name=RemoteDomainName" })
  remoteDomainName: string;
}
