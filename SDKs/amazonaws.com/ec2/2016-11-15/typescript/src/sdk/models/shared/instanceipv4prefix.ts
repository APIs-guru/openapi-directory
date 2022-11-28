import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceIpv4Prefix
/** 
 * Information about an IPv4 prefix.
**/
export class InstanceIpv4Prefix extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ipv4Prefix?: string;
}
