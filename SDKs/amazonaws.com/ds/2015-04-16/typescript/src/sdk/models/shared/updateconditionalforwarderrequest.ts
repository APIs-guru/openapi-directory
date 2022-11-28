import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateConditionalForwarderRequest
/** 
 * Updates a conditional forwarder.
**/
export class UpdateConditionalForwarderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=DnsIpAddrs" })
  dnsIpAddrs: string[];

  @SpeakeasyMetadata({ data: "json, name=RemoteDomainName" })
  remoteDomainName: string;
}
