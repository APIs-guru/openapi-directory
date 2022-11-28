import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublicIpv4PoolRange } from "./publicipv4poolrange";
import { Tag } from "./tag";



// PublicIpv4Pool
/** 
 * Describes an IPv4 address pool.
**/
export class PublicIpv4Pool extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  networkBorderGroup?: string;

  @SpeakeasyMetadata({ elemType: PublicIpv4PoolRange })
  poolAddressRanges?: PublicIpv4PoolRange[];

  @SpeakeasyMetadata()
  poolId?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  totalAddressCount?: number;

  @SpeakeasyMetadata()
  totalAvailableAddressCount?: number;
}
