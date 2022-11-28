import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IpRange
/** 
 * Describes an IPv4 range.
**/
export class IpRange extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidrIp?: string;

  @SpeakeasyMetadata()
  description?: string;
}
