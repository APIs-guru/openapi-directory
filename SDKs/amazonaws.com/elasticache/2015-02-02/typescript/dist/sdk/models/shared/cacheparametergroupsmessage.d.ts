import { SpeakeasyBase } from "../../../internal/utils";
import { CacheParameterGroup } from "./cacheparametergroup";
/**
 * Represents the output of a <code>DescribeCacheParameterGroups</code> operation.
**/
export declare class CacheParameterGroupsMessage extends SpeakeasyBase {
    cacheParameterGroups?: CacheParameterGroup[];
    marker?: string;
}
