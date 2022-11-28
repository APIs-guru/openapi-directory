import { SpeakeasyBase } from "../../../internal/utils";
import { CacheSubnetGroup } from "./cachesubnetgroup";
/**
 * Represents the output of a <code>DescribeCacheSubnetGroups</code> operation.
**/
export declare class CacheSubnetGroupMessage extends SpeakeasyBase {
    cacheSubnetGroups?: CacheSubnetGroup[];
    marker?: string;
}
