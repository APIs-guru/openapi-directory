import { SpeakeasyBase } from "../../../internal/utils";
import { CacheCluster } from "./cachecluster";
/**
 * Represents the output of a <code>DescribeCacheClusters</code> operation.
**/
export declare class CacheClusterMessage extends SpeakeasyBase {
    cacheClusters?: CacheCluster[];
    marker?: string;
}
