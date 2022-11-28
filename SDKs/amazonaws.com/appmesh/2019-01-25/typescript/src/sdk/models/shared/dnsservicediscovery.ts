import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DnsResponseTypeEnum } from "./dnsresponsetypeenum";



// DnsServiceDiscovery
/** 
 * An object that represents the DNS service discovery information for your virtual node.
**/
export class DnsServiceDiscovery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname: string;

  @SpeakeasyMetadata({ data: "json, name=responseType" })
  responseType?: DnsResponseTypeEnum;
}
