import { SpeakeasyBase } from "../../../internal/utils";
import { CacheSecurityGroup } from "./cachesecuritygroup";
/**
 * Represents the output of a <code>DescribeCacheSecurityGroups</code> operation.
**/
export declare class CacheSecurityGroupMessage extends SpeakeasyBase {
    cacheSecurityGroups?: CacheSecurityGroup[];
    marker?: string;
}
