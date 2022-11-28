import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PoolCidrBlock
/** 
 * Describes a CIDR block for an address pool.
**/
export class PoolCidrBlock extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidr?: string;
}
