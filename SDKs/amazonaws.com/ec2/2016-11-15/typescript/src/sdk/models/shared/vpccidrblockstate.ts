import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcCidrBlockStateCodeEnum } from "./vpccidrblockstatecodeenum";



// VpcCidrBlockState
/** 
 * Describes the state of a CIDR block.
**/
export class VpcCidrBlockState extends SpeakeasyBase {
  @SpeakeasyMetadata()
  state?: VpcCidrBlockStateCodeEnum;

  @SpeakeasyMetadata()
  statusMessage?: string;
}
