import { SpeakeasyBase } from "../../../internal/utils";
import { VpcCidrBlockStateCodeEnum } from "./vpccidrblockstatecodeenum";
/**
 * Describes the state of a CIDR block.
**/
export declare class VpcCidrBlockState extends SpeakeasyBase {
    state?: VpcCidrBlockStateCodeEnum;
    statusMessage?: string;
}
