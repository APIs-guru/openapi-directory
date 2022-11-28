import { SpeakeasyBase } from "../../../internal/utils";
import { UserIdGroupPair } from "./useridgrouppair";
/**
 * Describes a stale rule in a security group.
**/
export declare class StaleIpPermission extends SpeakeasyBase {
    fromPort?: number;
    ipProtocol?: string;
    ipRanges?: string[];
    prefixListIds?: string[];
    toPort?: number;
    userIdGroupPairs?: UserIdGroupPair[];
}
