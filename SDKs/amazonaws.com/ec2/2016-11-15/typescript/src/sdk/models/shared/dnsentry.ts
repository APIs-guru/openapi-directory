import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DnsEntry
/** 
 * Describes a DNS entry.
**/
export class DnsEntry extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dnsName?: string;

  @SpeakeasyMetadata()
  hostedZoneId?: string;
}
