import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PublicIpv4PoolRange
/** 
 * Describes an address range of an IPv4 address pool.
**/
export class PublicIpv4PoolRange extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addressCount?: number;

  @SpeakeasyMetadata()
  availableAddressCount?: number;

  @SpeakeasyMetadata()
  firstAddress?: string;

  @SpeakeasyMetadata()
  lastAddress?: string;
}
