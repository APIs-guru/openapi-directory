import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DnsResponseTypeEnum } from "./dnsresponsetypeenum";


// DnsServiceDiscovery
/** 
 * An object that represents the DNS service discovery information for your virtual node.
**/
export class DnsServiceDiscovery extends SpeakeasyBase {
  @Metadata({ data: "json, name=hostname" })
  hostname: string;

  @Metadata({ data: "json, name=responseType" })
  responseType?: DnsResponseTypeEnum;
}
