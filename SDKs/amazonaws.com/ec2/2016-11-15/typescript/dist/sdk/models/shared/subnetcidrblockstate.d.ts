import { SpeakeasyBase } from "../../../internal/utils";
import { SubnetCidrBlockStateCodeEnum } from "./subnetcidrblockstatecodeenum";
/**
 * Describes the state of a CIDR block.
**/
export declare class SubnetCidrBlockState extends SpeakeasyBase {
    state?: SubnetCidrBlockStateCodeEnum;
    statusMessage?: string;
}
