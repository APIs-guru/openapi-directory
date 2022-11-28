import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PoolCidrBlock } from "./poolcidrblock";
import { Tag } from "./tag";



// Ipv6Pool
/** 
 * Describes an IPv6 address pool.
**/
export class Ipv6Pool extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata({ elemType: PoolCidrBlock })
  poolCidrBlocks?: PoolCidrBlock[];

  @SpeakeasyMetadata()
  poolId?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
