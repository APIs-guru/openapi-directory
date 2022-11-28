import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubnetCidrBlockStateCodeEnum } from "./subnetcidrblockstatecodeenum";



// SubnetCidrBlockState
/** 
 * Describes the state of a CIDR block.
**/
export class SubnetCidrBlockState extends SpeakeasyBase {
  @SpeakeasyMetadata()
  state?: SubnetCidrBlockStateCodeEnum;

  @SpeakeasyMetadata()
  statusMessage?: string;
}
